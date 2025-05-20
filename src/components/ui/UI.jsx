import { useEffect, lazy } from "react";
import { atom, useAtom } from "jotai";
import { useProgress } from "@react-three/drei";
import { generatePaginationNumbers } from "../../utils/generatePaginationNumbers";
import Pagination from "./Pagination";

import AnimatedTexts from "./AnimatedTexts";
import { pages } from "../../data/pages";

export const pageAtom = atom(0);

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  console.log("page", page);

  const { active } = useProgress();

  // total de páginas internas (sin cover ni back)
  const totalInnerPages = pages.length - 1;
  console.log("totalInnerPages", totalInnerPages);

  // Página actual en términos de páginas internas
  // Si estamos en portada o contraportada, no mostrar paginación (o poner null)
  const currentInnerPage = page > 0 && page < pages.length ? page : null;

  const paginationNumbers = currentInnerPage
    ? generatePaginationNumbers(currentInnerPage, totalInnerPages)
    : [];

  console.log("paginationNumbers", paginationNumbers);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        {!active && <Pagination />}
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        {!active && <AnimatedTexts />}
      </div>
    </>
  );
};
