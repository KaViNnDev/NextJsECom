"use client";

import { useFormik } from "formik";
import { SectionWrapper } from "..";
import { CREATE_ACC_LABEL } from "../strings";
import { Footer } from "./Footer";
import { CreateAccountSchema } from "./Validation";
import { Input } from "../Input";
import { FormAction } from "../FormAction";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { FallBackComponent } from "../FallBackText";

export const CreateAccountForm = () => {
  const router = useRouter();
  const { handleChange, touched, errors, values, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: CreateAccountSchema,
      onSubmit: async (_values) => {
        await new Promise((res, _rej) => {
          setTimeout(res, 1500);
        });
        router.push("/verify", { scroll: false });
      },
    });
  return (
    <SectionWrapper>
      <h1 className="text-app-form-title">{CREATE_ACC_LABEL}</h1>
      <Suspense fallback={<FallBackComponent />}>
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
      </Suspense>
      <Footer />
    </SectionWrapper>
  );
};
