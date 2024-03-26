"use client";

import React from "react";
import { Icons } from ".";

interface CheckboxProps {
  checked: boolean;
  handleClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, handleClick }) => {
  return (
    <div
      className={`checkbox-wrapper ${
        checked ? "bg-black" : "bg-customSilverGray"
      }`}
      onClick={handleClick}
    >
      {checked && <Icons variant="Checkbox" />}
    </div>
  );
};

export default Checkbox;
