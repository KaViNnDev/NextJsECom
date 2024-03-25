"use client";

import { useFormik } from "formik";
import { SectionWrapper } from "..";
import { CREATE_ACC_LABEL } from "../strings";
import { Footer } from "./Footer";
import { CreateAccountSchema } from "./Validation";
import { Input } from "../Input";
import { FormAction } from "../FormAction";

export const CreateAccountForm = () => {
  const { handleChange, touched, errors, values, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: CreateAccountSchema,
      onSubmit: async (values) => {
        await new Promise((res, _rej) => {
          setTimeout(res, 5000);
        });
        console.log({ values });
      },
    });
  return (
    <SectionWrapper>
      <h1 className="text-app-form-title">{CREATE_ACC_LABEL}</h1>
      <form className="pt-[32px]" onSubmit={handleSubmit}>
        <div className="form-content">
          <Input
            variant="Name"
            onChange={handleChange}
            error={touched.name ? errors.name : ""}
            value={values.name}
          />
          <Input
            variant="Email"
            onChange={handleChange}
            error={touched.email ? errors.email : ""}
            value={values.email}
          />
          <Input
            variant="Password"
            onChange={handleChange}
            error={touched.password ? errors.password : ""}
            value={values.password}
          />
        </div>
        <FormAction variant="CreateAccount" disabled={isSubmitting} />
      </form>
      <Footer />
    </SectionWrapper>
  );
};
