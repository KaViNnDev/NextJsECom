import { Suspense } from "react";
import { VerifyForm } from "../_components/VerifyForm/VerifyForm";
import { FallBackComponent } from "../_components/FallBackComponent";

const VerifyPage = () => {
  return (
    <Suspense fallback={<FallBackComponent />}>
      <VerifyForm />
    </Suspense>
  );
};

export default VerifyPage;
