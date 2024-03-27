import * as Yup from "yup";
import { PASSWORD_TOO_SHORT_TEXT, REQUIRED_TEXT } from "~/app/constants";
export const CreateAccountSchema = Yup.object().shape({
  name: Yup.string().trim().required(REQUIRED_TEXT),
  email: Yup.string().trim().email().required(REQUIRED_TEXT),
  password: Yup.string()
    .trim()
    .required(REQUIRED_TEXT)
    .min(3, PASSWORD_TOO_SHORT_TEXT),
});
