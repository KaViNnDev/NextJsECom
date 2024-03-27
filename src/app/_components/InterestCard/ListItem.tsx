"use client";

import { useState } from "react";
import Checkbox from "../CheckBox";

interface ListItemProp {
  label: string;
}

export const ListItem: React.FC<ListItemProp> = ({ label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const toggleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="interest-list-item" onClick={toggleClick}>
      <Checkbox checked={isChecked} />
      <span>{label}</span>
    </div>
  );
};
