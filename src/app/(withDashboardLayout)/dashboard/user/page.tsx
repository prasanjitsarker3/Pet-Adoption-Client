"use client";
import { dateFormatter } from "@/Components/Common/dateFormatter";
import {
  useUpdateUserProfileMutation,
  useUserProfileQuery,
} from "@/Components/Redux/userApi/userApi";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Skeleton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SubmitHandler, useForm } from "react-hook-form";
import PTFileUploader from "@/Components/ReactHookFrom/PTFileUpload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "sonner";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface FormData {
  name: string;
  email: string;
}
const imageToken = "fd868decd9f90f9dbfa35322ae2d7341";

const UserDashboard = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useUserProfileQuery({});
  const [updateUserProfile, { isLoading: updating }] =
    useUpdateUserProfileMutation();
  console.log(data?.data);
  const user = data?.data;
  if (isLoading) {
    <h1>Loading</h1>;
  }

  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Update processing...");
    const updateData = {
      ...data,
      photo: image,
    };
    console.log("Up", updateData);
    try {
      const response = await updateUserProfile(updateData).unwrap();
      console.log(response);
      toast.success(response.message, { id: toastId, duration: 2000 });
      setOpen(false);
    } catch (error) {
      toast.error("Update failed. Please try again.", { id: toastId });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box my={5}>
        {isLoading ? (
          <Skeleton variant="rectangular" width={500} height={200} />
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                justifyItems="center"
                gap={5}
              >
                <Box>
                  <Image
                    src={
                      user?.photo ||
                      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1716743981~exp=1716747581~hmac=816d28785f93c52f3ddd03c1cb8337e3bef5a063f475080f7810fe5836e741f8&w=740"
                    }
                    alt=""
                    height={200}
                    width={200}
                  />
                  <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    fullWidth={true}
                    sx={{
                      marginTop: 1,
                    }}
                  >
                    Update Profile
                  </Button>
                </Box>
                <Box>
                  <Typography
                    p={1}
                    sx={{
                      backgroundColor: "#f4f4f4",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    Name :{user?.name}
                  </Typography>
                  <Typography
                    p={1}
                    sx={{
                      backgroundColor: "#f4f4f4",
                      marginTop: "8px",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    Email:{user?.email}
                  </Typography>
                  <Typography
                    p={1}
                    sx={{
                      backgroundColor: "#f4f4f4",
                      marginTop: "8px",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    Role:{user?.role}
                  </Typography>
                  <Typography
                    p={1}
                    sx={{
                      backgroundColor: "#f4f4f4",
                      marginTop: "8px",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    Sign Up Date:{dateFormatter(user?.createdAt)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}></Grid>
          </Grid>
        )}

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Update Profile Information
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <TextField
                defaultValue={user?.name}
                {...register("name")}
                size="small"
                fullWidth
                label="Name"
              />
              <TextField
                sx={{
                  marginY: 3,
                }}
                {...register("email")}
                defaultValue={user?.email}
                size="small"
                fullWidth
                label="Email"
              />
              <PTFileUploader
                name="file"
                label="Update Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  marginX: 6,
                }}
                fullWidth={true}
                type="submit"
                variant="contained"
                autoFocus
                onClick={handleClose}
              >
                Update Profile
              </Button>
            </DialogActions>
          </form>
        </BootstrapDialog>
      </Box>
    </>
  );
};

export default UserDashboard;
