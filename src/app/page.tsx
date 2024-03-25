import { redirect } from "next/navigation";

export default async function Home() {
  /* Redirecting to Login Page since, Login Page will be the default Initial Route */
  redirect("/login");
}
