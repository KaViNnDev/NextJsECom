"use client";

import { useId, useState } from "react";
import { INPUT_PLACEHOLDER, InputLabel } from "./strings";

interface InputProps {
  variant: "Name" | "Email" | "Password";
  isPassword?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  value: string;
}

type InputType = "text" | "password";

export const Input: React.FC<InputProps> = ({
  variant,
  isPassword,
  onChange,
  error,
  value,
}) => {
  const formId = useId();
  const [inputType, setInputType] = useState<InputType>("password");
  const toggleInputType = () => {
    setInputType(() => {
      if (inputType === "password") return "text";
      else return "password";
    });
  };
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor={formId} className="input-label app-form-sub-text-1">
          {InputLabel[variant]}
        </label>
        <div className="input-box input-container">
          <input
            type={isPassword === true ? inputType : "text"}
            name={InputLabel[variant]}
            id={formId}
            className="input-element placeholder:text-customGray"
            placeholder={INPUT_PLACEHOLDER}
            onChange={onChange}
            value={value}
          />
          {isPassword === true && (
            <span
              className="link-underline passwd-toggle-btn"
              onClick={toggleInputType}
            >
              {inputType === "password" ? "Show" : "Hide"}
            </span>
          )}
        </div>
        {error !== undefined && error !== "" && (
          <div className="form-error">{error}</div>
        )}
      </div>
    </>
  );
};
