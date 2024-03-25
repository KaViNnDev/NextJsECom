import { type PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className="app-container">{children}</section>;
};
