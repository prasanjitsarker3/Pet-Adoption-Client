import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../Axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://pet-adoption-pied.vercel.app/api",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["pets", "users", "request", "profile", "meta"],
});
