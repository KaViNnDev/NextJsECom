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

export const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        await new Promise((res, rej) => {
          setTimeout(res, 5000);
        });
        console.log({ values });
      },
    });

  return (
    <SectionWrapper>
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
            error={errors.email}
            value={values.email}
          />
          <Input
            variant="Password"
            isPassword
            onChange={handleChange}
            error={errors.password}
            value={values.password}
          />
        </div>
        <FormAction variant="Login" disabled={isSubmitting} />
      </form>
    </SectionWrapper>
  );
};
