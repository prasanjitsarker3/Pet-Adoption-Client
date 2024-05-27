import build from "next/dist/build";
import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUserStatus: builder.mutation({
      query: (data) => {
        console.log("res", { data });
        return {
          url: `/users/update-action/${data?.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
      query: (data) => {
        console.log("res", { data });
        return {
          url: `/users/update-role/${data?.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: ["users"],
    }),
    getUserPetAdoption: builder.query({
      query: () => ({
        url: "/adoption/my-pet",
        method: "GET",
      }),
      providesTags: ["users", "request"],
    }),
    changeUserPassword: builder.mutation({
      query: (data) => ({
        url: "/users/change-password",
        method: "POST",
        data,
      }),
    }),
    userProfile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    updateUserProfile: builder.mutation({
      query: (data) => {
        console.log("Check", data);
        return {
          url: "/users/profile",
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserStatusMutation,
  useUpdateUserRoleMutation,
  useGetUserPetAdoptionQuery,
  useChangeUserPasswordMutation,
  useUserProfileQuery,
  useUpdateUserProfileMutation,
} = userApi;
