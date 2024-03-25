import Link from "next/link";
import { HAVE_ACC_TEXT, LOGIN_TEXT } from "../strings";

export const Footer = () => {
  return (
    <div className="form-footer-wrapper pt-[48px]">
      <span className="text-app-form-footer-label">{HAVE_ACC_TEXT}</span>
      <Link
        className="form-footer-cta text-app-form-footer-cta"
        href={"/login"}
      >
        {LOGIN_TEXT}
      </Link>
    </div>
  );
};
