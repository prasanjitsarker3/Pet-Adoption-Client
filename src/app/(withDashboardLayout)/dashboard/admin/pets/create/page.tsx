"use client";
import { Gender, Size, Species } from "@/Components/Common/PetConstant";
import FromProvider from "@/Components/ReactHookFrom/FormProvider";
import PTFileUploader from "@/Components/ReactHookFrom/PTFileUpload";
import PTInput from "@/Components/ReactHookFrom/PTInput";
import PTSelectOption from "@/Components/ReactHookFrom/PTSelect";
import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useCreatePetMutation } from "@/Components/Redux/PetApi/petApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const imageToken = "fd868decd9f90f9dbfa35322ae2d7341";
const defaultValue = {
  name: "",
  species: "",
  breed: "",
  age: "",
  size: "",
  gender: "",
  location: "",
  description: "",
  healthStatus: "",
};

const PetCreate = () => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  const [createPet, { isLoading }] = useCreatePetMutation();
  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        const imgURL = imageResponse.data.display_url;
        setImage(imgURL);
      });
  };

  const handleCreatePet = async (values: FieldValues) => {
    const toastId = toast.loading("Pet Creating ...");
    try {
      const petData = {
        ...values,
        age: Number(values.age),
        photos: image,
      };
      const res = await createPet(petData);
      if (res?.data?.statusCode === 201) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        router.push("/dashboard/admin/pets");
      }
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message || "Something went wrong");
    }
  };
  return (
    <Box bgcolor="#F4F7FE" mt={5}>
      <FromProvider
        onSubmit={handleCreatePet}
        //   resolver={zodResolver(loginValidationSchema)}
        defaultValues={defaultValue}
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
            <PTInput fullWidth={true} size="small" name="age" label="Pet Age" />
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
              label="Choose Pet Photo"
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
            Create New Pet
          </Button>
        </Box>
      </FromProvider>
    </Box>
  );
};

export default PetCreate;
