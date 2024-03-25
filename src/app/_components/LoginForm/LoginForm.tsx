"use client";

import { SectionWrapper } from "..";
import { FormAction } from "../FormAction";
import { Input } from "../Input";
import {
  LOGIN_FORM_SUB_TEXT,
  LOGIN_FORM_SUB_TITLE,
  LOGIN_TEXT,
} from "../strings";
import { useFormik } from "formik";
import { loginSchema } from "./Validation";
import { Footer } from "./Footer";

export const LoginForm = () => {
  const { handleChange, handleSubmit, values, touched, errors, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        await new Promise((res, _rej) => {
          setTimeout(res, 5000);
        });
        console.log({ values });
      },
    });

  return (
    <SectionWrapper>
      <div className="form-divider">
        <div>
          <h3 className="text-app-form-title">{LOGIN_TEXT}</h3>
          <div className="text-app-form-sub-title pt-[36px]">
            {LOGIN_FORM_SUB_TITLE}
          </div>
          <div className="pt-[13px] text-app-form-sub-text-1">
            {LOGIN_FORM_SUB_TEXT}
          </div>
          <form id="login-form" className="pt-[31px]" onSubmit={handleSubmit}>
            <div className="form-content">
              <Input
                variant="Email"
                onChange={handleChange}
                error={touched.email ? errors.email : ""}
                value={values.email}
              />
              <Input
                variant="Password"
                isPassword
                onChange={handleChange}
                error={touched.password ? errors.password : ""}
                value={values.password}
              />
            </div>
            <FormAction variant="Login" disabled={isSubmitting} />
          </form>
        </div>
        <div className="pt-[29px]" />
        <Footer />
      </div>
    </SectionWrapper>
  );
};
