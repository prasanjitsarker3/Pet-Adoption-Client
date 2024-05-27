import { baseApi } from "../baseApi";

const requestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestPetAdoption: builder.mutation({
      query: (data) => ({
        url: "/adoption/request",
        method: "POST",
        data,
      }),
      invalidatesTags: ["request"],
    }),
    allRequestPetAdoption: builder.query({
      query: () => ({
        url: "/adoption",
        method: "GET",
      }),
      providesTags: ["request"],
    }),
    singleRequestPetAdoption: builder.query({
      query: (id) => ({
        url: `/adoption/single/${id}`,
        method: "GET",
      }),
      providesTags: ["request"],
    }),
    updateRequestStatus: builder.mutation({
      query: (data) => {
        console.log("Data", data);
        return {
          url: `/adoption/adoption-requests/${data?.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: ["request"],
    }),
  }),
});

export const {
  useRequestPetAdoptionMutation,
  useAllRequestPetAdoptionQuery,
  useUpdateRequestStatusMutation,
  useSingleRequestPetAdoptionQuery,
} = requestApi;
