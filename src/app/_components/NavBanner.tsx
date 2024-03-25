import { Icons } from "./Icons";
import { NAVBAR_BANNER_TEXT } from "./strings";

export const NavBanner = () => {
  return (
    <div className="bg-silver flex flex-1 items-center justify-center gap-[24px] pb-[8px] pt-[10px]">
      <Icons variant="LeftArrow" />
      <div className="text-app-nav-banner">{NAVBAR_BANNER_TEXT}</div>
      <Icons variant="RightArrow" />
    </div>
  );
};
