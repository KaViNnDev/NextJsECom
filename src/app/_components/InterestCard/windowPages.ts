import { PAGINATED_WINDOW_SIZE } from "~/app/constants";

export const getWindowPages = (currentPage: number, totalPages: number) => {
  const windowSize = PAGINATED_WINDOW_SIZE;
  let startPage: number, endPage: number;

  // If total pages are less than or equal to window size, show all pages
  if (totalPages <= windowSize) {
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calculate start and end page based on current page
    const halfWindowSize = Math.floor(windowSize / 2);
    if (currentPage <= halfWindowSize) {
      startPage = 1;
      endPage = windowSize;
    } else if (currentPage + halfWindowSize >= totalPages) {
      startPage = totalPages - windowSize + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfWindowSize;
      endPage = currentPage + halfWindowSize;
    }
  }

  const pages = Array(endPage - startPage + 1)
    .fill(0)
    .map((_, index) => index + startPage);

  return pages;
};
