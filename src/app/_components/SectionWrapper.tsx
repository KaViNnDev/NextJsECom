import { type PropsWithChildren } from "react";

export const SectionWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="section-wrapper rounded-border">{children}</article>
  );
};
