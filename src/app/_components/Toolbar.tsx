import { TOOLBAR_OPTIONS } from "./strings";

export const Toolbar = () => {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-container">
        {TOOLBAR_OPTIONS.map((option, index) => (
          <div key={`${index}_${option}`} className="text-app-toolbar-link">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
