import { Icons } from "./Icons";
import { NAVBAR_BANNER_TEXT } from "./strings";

export const NavBanner = () => {
  return (
    <div className="navbar navbanner-wrapper">
      <Icons variant="LeftArrow" />
      <div className="text-app-nav-banner">{NAVBAR_BANNER_TEXT}</div>
      <Icons variant="RightArrow" />
    </div>
  );
};
