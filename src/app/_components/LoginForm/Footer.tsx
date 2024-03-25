import Link from "next/link";
import { DONT_HAVE_ACC_TEXT, SIGN_UP_TEXT } from "../strings";

export const Footer = () => {
  return (
    <div className="form-footer-wrapper pt-[31px]">
      <span className="text-app-form-footer-label">{DONT_HAVE_ACC_TEXT}</span>
      <Link
        className="form-footer-cta text-app-form-footer-cta"
        href={"/create"}
      >
        {SIGN_UP_TEXT}
      </Link>
    </div>
  );
};
