import { Suspense } from "react";
import { SectionWrapper } from "..";
import {
  MARK_YOUR_INTEREST_LABEL,
  NOTIFED_ACK_TEXT,
  SAVED_INTEREST_LABEL,
} from "../strings";
import { ListItem } from "./ListItem";
import { PaginationControls } from "./PaginationControls";
import { data } from "./data";
import { type InterestCardProps } from "./types";
import { LIST_FALLBACK_TEXT } from "~/app/constants";

export const InterestCard: React.FC<InterestCardProps> = ({
  page,
  perPage,
}) => {
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = data.slice(start, end);

  return (
    <SectionWrapper>
      <h3 className="text-app-form-title">{MARK_YOUR_INTEREST_LABEL}</h3>
      <h6 className="pt-[23px] text-app-form-sub-text-2">{NOTIFED_ACK_TEXT}</h6>
      <span className="list-wrapper text-app-form-sub-text-3">
        {SAVED_INTEREST_LABEL}
      </span>
      <Suspense fallback={LIST_FALLBACK_TEXT}>
        <div className="list-container">
          {entries.map((entry, index) => {
            return (
              <ListItem
                key={`${index}_${entry}`}
                isChecked={index % 2 === 1}
                label={entry}
              />
            );
          })}
        </div>
      </Suspense>
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        dataLength={data.length}
        page={page}
        perPage={perPage}
      />
    </SectionWrapper>
  );
};
