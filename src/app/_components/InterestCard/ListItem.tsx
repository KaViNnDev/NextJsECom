"use client";

import Checkbox from "../CheckBox";

interface ListItemProp {
  isChecked: boolean;
  label: string;
}

export const ListItem: React.FC<ListItemProp> = ({ isChecked, label }) => {
  return (
    <div className="flex gap-[12px]">
      <Checkbox
        checked={isChecked}
        handleClick={() => {
          //
        }}
      />
      <span>{label}</span>
    </div>
  );
};
