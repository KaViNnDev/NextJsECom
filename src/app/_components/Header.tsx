import React from "react";
import { NavBar } from "./NavBar";
import { Toolbar } from "./Toolbar";
import { NavBanner } from "./NavBanner";

export const Header = () => {
  return (
    <React.Fragment key={"e-com-header"}>
      <Toolbar />
      <NavBar />
      <NavBanner />
    </React.Fragment>
  );
};
