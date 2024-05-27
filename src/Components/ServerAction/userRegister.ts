"use server";

import { FieldValues } from "react-hook-form";

export const userRegister = async (formData: FieldValues) => {
  const res = await fetch(`http://localhost:4000/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    // cache: "no-store",
  });
  const userInfo = await res.json();

  return userInfo;
};
