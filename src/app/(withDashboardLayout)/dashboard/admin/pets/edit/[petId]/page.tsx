"use client";

import { Gender, Size, Species } from "@/Components/Common/PetConstant";
import FromProvider from "@/Components/ReactHookFrom/FormProvider";
import PTFileUploader from "@/Components/ReactHookFrom/PTFileUpload";
import PTInput from "@/Components/ReactHookFrom/PTInput";
import PTSelectOption from "@/Components/ReactHookFrom/PTSelect";
import {
  useGetSinglePetQuery,
  useUpdatePetsMutation,
} from "@/Components/Redux/PetApi/petApi";
import { Box, Button, Grid, Skeleton } from "@mui/material";
import { FieldValues } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type IParams = {
  params: {
    petId: string;
  };
};

const PetEditPage = ({ params }: IParams) => {
  const { data, isLoading } = useGetSinglePetQuery(params.petId);
  const [updatePets, { isLoading: updating }] = useUpdatePetsMutation();
  const router = useRouter();

  console.log("Data", data?.data?.name);
  const defaultValue = {
    name: data?.data?.name || "",
    species: data?.data?.species || "",
    breed: data?.data?.breed || "",
    age: data?.data?.age || "",
    size: data?.data?.size || 0,
    gender: data?.data?.gender || "",
    location: data?.data?.location || "",
    description: data?.data?.description || "",
    healthStatus: data?.data?.healthStatus || "",
  };
  const fileUploadHandler = (file: File) => {
    console.log(file);
  };
  const handleCreatePet = async (values: FieldValues) => {
    const toastId = toast.loading("Pet Updating ...");
    try {
      const petData = {
        ...values,
        age: Number(values.age),
      };
      const res = await updatePets({ id: params.petId, body: petData });
      if (res?.data?.statusCode === 200) {
        router.push("/dashboard/admin/pets");
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error(err?.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Box bgcolor="#F4F7FE" mt={5}>
      {data ? (
        <FromProvider
          onSubmit={handleCreatePet}
          //   resolver={zodResolver(loginValidationSchema)}
          defaultValues={data && defaultValue}
        >
          <Grid container spacing={3} px={6} pt={4}>
            <Grid item xs={12} sm={12} md={4}>
              <PTInput fullWidth={true} size="small" label="Name" name="name" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTSelectOption
                name="species"
                label="Species"
                item={Species}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTInput
                fullWidth={true}
                size="small"
                name="breed"
                label="Pet Breed"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTInput
                fullWidth={true}
                size="small"
                name="age"
                label="Pet Age"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTSelectOption
                name="gender"
                label="Select Gender"
                item={Gender}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTSelectOption
                name="size"
                label="Select Size"
                item={Size}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTInput
                fullWidth={true}
                size="small"
                name="location"
                label="location"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTInput
                fullWidth={true}
                size="small"
                name="description"
                label="Description"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTFileUploader
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PTInput
                fullWidth={true}
                size="small"
                name="healthStatus"
                label="Health Status"
              />
            </Grid>
          </Grid>
          <Box textAlign="center" pb={3}>
            <Button type="submit" variant="contained" disabled={isLoading}>
              Update Pet Information
            </Button>
          </Box>
        </FromProvider>
      ) : (
        <Skeleton
          sx={{ borderRadius: 2 }}
          variant="rectangular"
          width="100%"
          height={340}
        />
      )}
    </Box>
  );
};

export default PetEditPage;
