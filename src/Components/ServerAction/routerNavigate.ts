"use server";
import { redirect } from "next/navigation";

export const routerNavigate = () => {
  redirect("/login");
};
