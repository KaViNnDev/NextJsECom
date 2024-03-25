import { Icons } from "./Icons";
import { NAVBAR_ICONS, NAVBAR_LINK_OPTIONS, NAVBAR_TITLE } from "./strings";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-[40px] pb-[18px] pt-[7px]">
      <div className="text-app-title flex-1 items-center justify-start">
        {NAVBAR_TITLE}
      </div>
      <div className=" flex flex-1 items-center justify-center gap-[32px]">
        {NAVBAR_LINK_OPTIONS.map((option, index) => (
          <div key={`${index}_${option}`} className="text-app-nav-link">
            {option}
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-end gap-[32px]">
        {NAVBAR_ICONS.map((iconVariant, index) => (
          <div key={`${index}_${iconVariant}`}>
            <Icons variant={iconVariant} />
          </div>
        ))}
      </div>
    </div>
  );
};
