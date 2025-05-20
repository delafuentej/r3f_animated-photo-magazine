export const generatePaginationNumbers = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    const pages = [1, 2, 3];
    if (currentPage === 3) {
      pages.push(4); // Mostrar 4 si estás en la 3
    }
    pages.push("...", totalPages - 1, totalPages);
    return pages;
  }

  if (currentPage >= totalPages - 2) {
    const pages = [1, 2, "..."];
    if (currentPage === totalPages - 2) {
      pages.push(totalPages - 3); // Mostrar totalPages - 3 si estás en totalPages - 2
    }
    pages.push(totalPages - 2, totalPages - 1, totalPages);
    return pages;
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
