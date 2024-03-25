import React from "react";
import { NavBar } from "./NavBar";
import { Toolbar } from "./Toolbar";
import { NavBanner } from "./NavBanner";

export const Header = () => {
  return (
    <nav key={"e-com-header"}>
      <Toolbar />
      <NavBar />
      <NavBanner />
    </nav>
  );
};
