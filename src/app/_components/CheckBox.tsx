"use client";

import React from "react";
import { Icons } from ".";

interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <div
      className={`checkbox-wrapper ${
        checked ? "bg-black" : "bg-customSilverGray"
      }`}
    >
      {checked && <Icons variant="Checkbox" />}
    </div>
  );
};

export default Checkbox;
