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
import { Suspense, useState } from "react";
import { FallBackComponent } from "../FallBackComponent";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { makeUserLoggedIn } from "../../session";

export const LoginForm = () => {
  const [loginError, setLoginError] = useState<string>("");
  const router = useRouter();
  const userLoginMutation = api.user.login.useMutation({
    onSuccess: (_success) => {
      setLoginError("");
      makeUserLoggedIn();
      router.push("/interests");
    },
    onError: (error) => {
      setLoginError(error.message);
    },
  });
  const { handleChange, handleSubmit, values, touched, errors, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        await new Promise((res, _rej) => {
          userLoginMutation.mutate({
            email: values.email,
            password: values.password,
          });
          res("");
        });
      },
    });

  return (
    <SectionWrapper>
      <div>
        <h3 className="text-app-form-title">{LOGIN_TEXT}</h3>
        <div className="pt-[36px] text-app-form-sub-title">
          {LOGIN_FORM_SUB_TITLE}
        </div>
        <div className="pt-[13px] text-app-form-sub-text-1">
          {LOGIN_FORM_SUB_TEXT}
        </div>
        <Suspense fallback={<FallBackComponent />}>
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
            <FormAction
              variant="Login"
              disabled={isSubmitting}
              error={loginError}
            />
          </form>
        </Suspense>
      </div>
      <div className="form-divider" />
      <Footer />
    </SectionWrapper>
  );
};
