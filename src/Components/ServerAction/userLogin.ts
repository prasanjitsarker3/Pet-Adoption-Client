"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { authKey } from "../Common/auth";
import { redirect } from "next/navigation";

export const userLogin = async (formData: FieldValues) => {
  const res = await fetch(`http://localhost:4000/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const userInfo = await res.json();
  if (userInfo?.data?.token) {
    cookies().set(authKey, userInfo?.data?.token);
  }
  return userInfo;
};
