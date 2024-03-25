import * as Yup from "yup";
import { EMAIL_IS_TOO_SHORT_TEXT, REQUIRED_TEXT } from "../strings";
export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(REQUIRED_TEXT),
  password: Yup.string()
    .required(REQUIRED_TEXT)
    .min(3, EMAIL_IS_TOO_SHORT_TEXT),
});
