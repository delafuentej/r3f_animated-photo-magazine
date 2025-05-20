import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "./ui/UI";
import { pages } from "../data/pages"; // Ajusta la ruta según tu estructura de carpetas
import Page from "./Page";

const Book = ({ ...props }) => {
  const [page] = useAtom(pageAtom);
  const [delayedPage, setDelayedPage] = useState(page);

  useEffect(() => {
    let timeout;
    const goToPage = () => {
      setDelayedPage((delayedPage) => {
        if (page === delayedPage) {
          return delayedPage;
        } else {
          timeout = setTimeout(
            () => {
              goToPage();
            },
            Math.abs(page - delayedPage) > 2 ? 50 : 150
          );
          if (page > delayedPage) {
            return delayedPage + 1;
          }
          if (page < delayedPage) {
            return delayedPage - 1;
          }
        }
      });
    };
    goToPage();

    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {[...pages].map((pageData, index) => (
        <Page
          key={index}
          //page={page}
          page={delayedPage}
          // opened={page > index}
          opened={delayedPage > index}
          //bookClosed={page === 0 || page === pages.length}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          //   position-x={index * 0.15}
          number={index}
          {...pageData}
        />
      ))}
    </group>
  );
};

export default Book;
