import { url } from "inspector";
import { baseApi } from "../baseApi";

const petAdoption = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPet: builder.mutation({
      query: (data) => ({
        url: "/pets/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["pets"],
    }),

    getPets: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/pets",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: any, meta: any) => {
        return {
          pet: response?.data,
          meta: response.data,
        };
      },
      providesTags: ["pets"],
    }),

    getSinglePet: builder.query({
      query: (id: string | string[] | undefined) => ({
        url: `/pets/${id}`,
        method: "GET",
      }),
      providesTags: ["pets"],
    }),
    updatePets: builder.mutation({
      query: (data) => ({
        url: `/pets/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["pets"],
    }),
    deletePets: builder.mutation({
      query: (id: string) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pets"],
    }),

    metaData: builder.query({
      query: () => ({
        url: "/users/meta",
        method: "GET",
      }),
      providesTags: ["meta"],
    }),
  }),
});

export const {
  useGetPetsQuery,
  useCreatePetMutation,
  useGetSinglePetQuery,
  useUpdatePetsMutation,
  useDeletePetsMutation,
  useMetaDataQuery,
} = petAdoption;
