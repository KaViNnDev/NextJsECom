import { Suspense } from "react";
import { LoginForm } from "../_components/LoginForm/LoginForm";
import { FallBackComponent } from "../_components/FallBackComponent";
import { makeUserLoggedOut } from "../session";

const LoginPage = () => {
  makeUserLoggedOut();
  return (
    <Suspense fallback={<FallBackComponent />}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
