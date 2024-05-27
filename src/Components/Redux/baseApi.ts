import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../Axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({}),
  tagTypes: ["pets", "users", "request", "profile", "meta"],
});
