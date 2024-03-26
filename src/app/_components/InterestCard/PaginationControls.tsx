import React, { Suspense } from "react";
import { getWindowPages } from "./windowPages";
import { PaginatedButton } from "./PaginatedButton";
import { type InterestCardProps } from "./types";
import {
  LAST_PAGE_LABEL,
  NEXT_PAGE_LABEL,
  PREVIOUS_PAGE_LABEL,
  START_PAGE_LABEL,
} from "../strings";
import { PAGINATION_FALLBACK_TEXT } from "~/app/constants";

interface PaginationControlsProps extends InterestCardProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  dataLength: number;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  dataLength,
  page,
  perPage,
}) => {
  const per_page =
    typeof perPage === "string" && !isNaN(Number(perPage)) ? perPage : "";

  const totalPages = Math.ceil(dataLength / Number(per_page));

  const windowPage = getWindowPages(Number(page), totalPages);

  return (
    <Suspense fallback={PAGINATION_FALLBACK_TEXT}>
      <div className="flex gap-[10px] pt-[67px]">
        <PaginatedButton
          isDisabled={Number(page) === 1}
          page="1"
          perPage={per_page}
        >
          {START_PAGE_LABEL}
        </PaginatedButton>
        <PaginatedButton
          isDisabled={!hasPrevPage}
          page={`${Number(page) - 1}`}
          perPage={per_page}
        >
          {PREVIOUS_PAGE_LABEL}
        </PaginatedButton>
        {windowPage.map((currentPage, index) => {
          return (
            <PaginatedButton
              key={`${index}_${currentPage}`}
              page={currentPage.toString()}
              perPage={per_page}
              isActive={currentPage === Number(page)}
            >
              {currentPage}
            </PaginatedButton>
          );
        })}
        <PaginatedButton
          isDisabled={!hasNextPage}
          page={`${Number(page) + 1}`}
          perPage={per_page}
        >
          {NEXT_PAGE_LABEL}
        </PaginatedButton>
        <PaginatedButton
          isDisabled={Number(page) === totalPages}
          page={totalPages.toString()}
          perPage={per_page}
        >
          {LAST_PAGE_LABEL}
        </PaginatedButton>
      </div>
    </Suspense>
  );
};
