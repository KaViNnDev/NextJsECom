import { Suspense } from "react";
import { CreateAccountForm } from "../_components/CreateAccountForm/CreateAccountForm";
import { FallBackComponent } from "../_components/FallBackText";

const CreateAccount = () => {
  return (
    <Suspense fallback={<FallBackComponent />}>
      <CreateAccountForm />
    </Suspense>
  );
};

export default CreateAccount;
