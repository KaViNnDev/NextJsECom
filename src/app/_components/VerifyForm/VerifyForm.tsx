import { SectionWrapper } from "..";
import { FormAction } from "../FormAction";
import { VERIFY_EMAIL_ACK_TEXT, VERIFY_EMAIL_LABEL } from "../strings";
import { SplitBox } from "./SplitBox";

export const VerifyForm = () => {
  return (
    <SectionWrapper>
      <h1 className="text-app-form-title">{VERIFY_EMAIL_LABEL}</h1>
      <div className="pt-[32px]">
        <div className="text-app-form-sub-text-1">{VERIFY_EMAIL_ACK_TEXT}</div>
        <div className="text-app-form-footer-cta">{"xyz@gmail.com"}</div>
        <SplitBox />
        <FormAction variant="Verify" disabled={false} />
      </div>
    </SectionWrapper>
  );
};
