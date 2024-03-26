import { CartIcon } from "~/app/_icons/Cart";
import { type IconsVariant } from "./types";
import {
  CheckboxIcon,
  ChevonLeftIcon,
  ChevonRightIcon,
  SearchIcon,
  type SVGProps,
} from "~/app/_icons/";

interface IconsProps extends SVGProps {
  variant: IconsVariant;
}

const getIcon = (variant: IconsVariant) => {
  switch (variant) {
    case "Cart":
      return CartIcon;
    case "Search":
      return SearchIcon;
    case "LeftArrow":
      return ChevonLeftIcon;
    case "RightArrow":
      return ChevonRightIcon;
    case "Checkbox":
      return CheckboxIcon;
  }
};

export const Icons: React.FC<IconsProps> = ({ variant, ...restProps }) => {
  const Icon = getIcon(variant);
  return <Icon {...restProps} />;
};
