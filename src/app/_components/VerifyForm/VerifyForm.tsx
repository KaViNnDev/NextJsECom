"use client";

import { Suspense, useState } from "react";
import { SectionWrapper } from "..";
import { FormAction } from "../FormAction";
import { VERIFY_EMAIL_ACK_TEXT, VERIFY_EMAIL_LABEL } from "../strings";
import { SplitBox } from "./SplitBox";
import { useRouter, useSearchParams } from "next/navigation";
import { OTP_INVALID_TEXT, REQUIRED_TEXT } from "~/app/constants";
import { FallBackComponent } from "../FallBackComponent";
import { api } from "~/trpc/react";

export const VerifyForm = () => {
  const [otp, setOtp] = useState<string[]>(Array(8).fill(""));
  const [error, setError] = useState<string>();
  const [verificationError, setVerificationError] = useState<string>();
  const router = useRouter();
  const search = useSearchParams();
  const verificationMutation = api.user.verifyOtp.useMutation({
    onSuccess: () => {
      setVerificationError("");
      router.push("/interests");
    },
    onError: (error) => {
      setVerificationError(error.message);
    },
  });

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.trim();
    setOtp(newOtp);
  };
  const submitHandler = () => {
    setVerificationError("");
    const isRequired = otp.some((digit) => digit === "");
    if (isRequired) {
      setError(REQUIRED_TEXT);
      return;
    }
    const isInvalid = otp.some((digit) => isNaN(Number(digit)));
    if (isInvalid) {
      setError(OTP_INVALID_TEXT);
      return;
    }
    verificationMutation.mutate({
      otp: otp.join(""),
    });
  };
  return (
    <SectionWrapper>
      <h1 className="text-app-form-title">{VERIFY_EMAIL_LABEL}</h1>
      <div className="pt-[32px]">
        <form
          id="verify-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            submitHandler();
          }}
        >
          <div className="text-app-form-sub-text-1">
            {VERIFY_EMAIL_ACK_TEXT}
          </div>
          <div className="text-app-form-footer-cta">{search.get("email")}</div>
          <Suspense fallback={<FallBackComponent />}>
            <SplitBox handleChange={handleChange} otp={otp} error={error} />
            <FormAction
              variant="Verify"
              disabled={false}
              error={verificationError}
            />
          </Suspense>
        </form>
      </div>
    </SectionWrapper>
  );
};
