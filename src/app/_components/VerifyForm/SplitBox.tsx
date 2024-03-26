"use client";

import React, { useRef } from "react";

interface SplitBoxProps {
  handleChange: (index: number, value: string) => void;
  otp: string[];
  error?: string;
}

export const SplitBox: React.FC<SplitBoxProps> = ({
  handleChange,
  otp,
  error,
}) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]); // Refs for individual input fields

  // Function to handle input change in each OTP field
  const handleInputChange = (index: number, value: string) => {
    handleChange(index, value);

    // Move focus to the next input field if available
    if (
      value.trim() !== "" &&
      index < otp.length - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const newIndex = index - 1;
      inputRefs.current[newIndex]?.focus(); // Focus previous input field
      handleChange(newIndex, ""); // Clear value in previous input field
    }
  };

  return (
    <div className="split-box-wrapper">
      <div className="input-label app-form-sub-text-1">Code</div>
      <div className="split-box-container">
        {/* Render individual input fields for OTP */}
        {otp.map((digit, index) => (
          <div key={index} className="otp-wrapper">
            <input
              ref={(el) => {
                inputRefs.current[index] = el;
              }} // Store input ref in the array
              type="text"
              maxLength={1} // Limit input length to 1 character
              className="input-element otp-element"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          </div>
        ))}
      </div>
      {error !== "" && error !== undefined && (
        <span className="form-error">{error}</span>
      )}
    </div>
  );
};
