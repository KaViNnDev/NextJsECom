import { Icons } from "./Icons";
import { NAVBAR_ICONS, NAVBAR_LINK_OPTIONS, NAVBAR_TITLE } from "./strings";

export const NavBar = () => {
  return (
    <div className="navbar navbar-wrapper">
      <div className="navbar navbar-title-container">{NAVBAR_TITLE}</div>
      <div className="navbar navbar-links-wrapper">
        {NAVBAR_LINK_OPTIONS.map((option, index) => (
          <div key={`${index}_${option}`} className="navbar text-app-nav-link">
            {option}
          </div>
        ))}
      </div>
      <div className="navbar navbar-icons-wrapper">
        {NAVBAR_ICONS.map((iconVariant, index) => (
          <div key={`${index}_${iconVariant}`}>
            <Icons variant={iconVariant} />
          </div>
        ))}
      </div>
    </div>
  );
};
