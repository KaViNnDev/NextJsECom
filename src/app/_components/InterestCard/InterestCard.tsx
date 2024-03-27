import { Suspense } from "react";
import { SectionWrapper } from "..";
import {
  MARK_YOUR_INTEREST_LABEL,
  NOTIFED_ACK_TEXT,
  SAVED_INTEREST_LABEL,
} from "../strings";
import { ListItem } from "./ListItem";
import { PaginationControls } from "./PaginationControls";
import { type InterestCardProps } from "./types";
import { FallBackComponent } from "../FallBackComponent";

export const InterestCard: React.FC<InterestCardProps> = ({
  page,
  perPage,
  data,
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
      <Suspense fallback={<FallBackComponent />}>
        <div className="list-container">
          {entries.map(({ id, name }) => {
            return <ListItem key={id} label={name} />;
          })}
        </div>
        <PaginationControls
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
          dataLength={data.length}
          page={page}
          perPage={perPage}
        />
      </Suspense>
    </SectionWrapper>
  );
};
