"use client";

import { FormActionLabel } from "./strings";
import { type formVariants } from "./types";

interface FormActionProps {
  variant: formVariants;
  disabled: boolean;
  error?: string;
}

export const FormAction: React.FC<FormActionProps> = ({
  variant,
  disabled,
  error,
}) => {
  return (
    <div
      className={`form-action-align-content ${variant !== "Verify" ? "form-action-wrapper" : ""}`}
    >
      <button
        type="submit"
        className={`form-action text-app-form-footer-cta ${disabled ? "disabled" : ""}`}
      >
        {FormActionLabel[variant]}
      </button>
      {error !== "" && (
        <span className="form-error border-none text-left ">{error}</span>
      )}
    </div>
  );
};
