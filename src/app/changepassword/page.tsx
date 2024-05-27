"use client";
import { authKey } from "@/Components/Common/auth";
import { useChangeUserPasswordMutation } from "@/Components/Redux/userApi/userApi";
import { deleteCookies } from "@/Components/ServerAction/deleteCookies";
import { routerNavigate } from "@/Components/ServerAction/routerNavigate";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  currentPassword: string;
  newPassword: string;
  againNewPassword: string;
}

const ChangePassword = () => {
  const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Changing password...");
    const changeData = {
      currentPassword: data.currentPassword,
      newPassword: data?.newPassword,
    };
    try {
      const res = await changeUserPassword(changeData);
      console.log("Check", res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        localStorage.removeItem(authKey);
        deleteCookies([authKey], "/login");
        console.log("Check", res);
        // routerNavigate();
      } else {
        //@ts-ignore
        toast.error(res?.message || "Password Does not match!", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  const newPassword = watch("newPassword");
  const againNewPassword = watch("againNewPassword");

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      sx={{
        backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-pet-portrait-small-dog-with-cage_23-2149218437.jpg?t=st=1716460852~exp=1716464452~hmac=a0a544a79baebeebe953c96659202b1f68e39e3e776a2a591d6f2b246dca34df&w=826')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        py={5}
        px={5}
        boxShadow={1}
        bgcolor="white"
        borderRadius={1}
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("currentPassword", {
              required: "Current password is required",
            })}
            size="small"
            fullWidth
            id="current-password"
            label="Current Password"
            type="password"
            error={!!errors.currentPassword}
            helperText={errors.currentPassword?.message}
          />
          <TextField
            {...register("newPassword", {
              required: "New password is required",
            })}
            size="small"
            sx={{
              marginY: 3,
            }}
            fullWidth
            id="new-password"
            label="New Password"
            type="password"
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />
          <TextField
            {...register("againNewPassword", {
              required: "Please confirm your new password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
            size="small"
            fullWidth
            id="again-new-password"
            label="Confirm New Password"
            type="password"
            error={!!errors.againNewPassword}
            helperText={errors.againNewPassword?.message}
          />

          <Button
            fullWidth
            variant="contained"
            disabled={isLoading}
            autoFocus
            type="submit"
            sx={{
              marginTop: 2,
            }}
          >
            Change Password
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default ChangePassword;
