"use client";

import { FormActionLabel } from "./strings";
import { type formVariants } from "./types";

interface FormActionProps {
  variant: formVariants;
  disabled: boolean;
}

export const FormAction: React.FC<FormActionProps> = ({
  variant,
  disabled,
}) => {
  return (
    <div className={variant !== "Verify" ? "form-action-wrapper" : ""}>
      <button
        type="submit"
        className={`form-action text-app-form-footer-cta ${disabled ? "disabled" : ""}`}
      >
        {FormActionLabel[variant]}
      </button>
    </div>
  );
};
