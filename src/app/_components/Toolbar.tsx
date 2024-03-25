import { TOOLBAR_OPTIONS } from "./strings";

export const Toolbar = () => {
  return (
    <div className="items-center justify-end px-[40px] py-[12px]">
      <div className="flex items-center justify-end gap-[20px]">
        {TOOLBAR_OPTIONS.map((option, index) => (
          <div key={`${index}_${option}`} className="text-app-toolbar-link">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
