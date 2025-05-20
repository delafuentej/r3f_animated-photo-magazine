// components/Pagination.tsx
import { useEffect } from "react";
import { useAtom } from "jotai";
import { pages } from "../../data/pages";
import { pageAtom } from "./UI"; // Ajusta si mueves `pages` a un archivo separado
import { generatePaginationNumbers } from "../../utils/generatePaginationNumbers";

const Pagination = () => {
  const [page, setPage] = useAtom(pageAtom);

  const totalInnerPages = pages.length - 1;
  const currentInnerPage = page > 0 && page < pages.length ? page : null;

  const paginationNumbers = currentInnerPage
    ? generatePaginationNumbers(currentInnerPage, totalInnerPages)
    : [];

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <div className="w-full overflow-auto pointer-events-auto flex justify-center">
      <div className="pagination-container overflow-auto flex items-center gap-4 max-w-fullp-4 sm:p-6 md:p-10">
        {/* Botón Cover */}
        <button
          className={` pagination-btn border-transparent hover:border-white transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg uppercase shrink-0 border ${
            page === 0
              ? "bg-skyBlue-300 text-black font-extrabold"
              : "bg-black/30 text-white font-extrabold"
          }`}
          onClick={() => setPage(0)}
        >
          Cover
        </button>

        {/* Botones paginación (internas) */}
        {paginationNumbers.map((num, i) =>
          num === "..." ? (
            <span
              key={"dots-" + i}
              className="px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={num}
              className={`pagination-btn border-transparent hover:border-white transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg uppercase shrink-0 border ${
                page === num
                  ? "bg-skyBlue-300 text-black font-extrabold"
                  : "bg-black/30 text-white font-extrabold"
              }`}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          )
        )}

        {/* Botón Back Cover */}
        <button
          className={`pagination-btn border-transparent hover:border-white transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg uppercase shrink-0 border ${
            page === pages.length
              ? "bg-skyBlue-300 text-black font-extrabold"
              : "bg-black/30 text-white font-extrabold"
          }`}
          onClick={() => setPage(pages.length)}
        >
          Back Cover
        </button>
      </div>
    </div>
  );
};

export default Pagination;
