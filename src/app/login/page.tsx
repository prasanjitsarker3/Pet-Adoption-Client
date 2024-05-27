"use client";

import { storeUserInfo } from "@/Components/Auth/authService";
import FromProvider from "@/Components/ReactHookFrom/FormProvider";
import PTInput from "@/Components/ReactHookFrom/PTInput";
import { userLogin } from "@/Components/ServerAction/userLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export interface IPatientLogin {
  email: string;
  password: string;
}

const loginValidationSchema = z.object({
  email: z.string().email("Email is required !"),
  password: z.string().min(6, "Must be at least 6 characters !"),
});

const defaultValue = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const router = useRouter();

  const handleSubmitLogin = async (values: FieldValues) => {
    const toastId = toast.loading("Logging In...");
    try {
      const res = await userLogin(values);
      console.log("Res", res);
      if (res?.data?.id) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
        storeUserInfo({ accessToken: res?.data?.token });
        router.push("/");
      } else {
        toast.error(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      console.log("Err", err.message);
      toast.error(err?.message, { id: toastId, duration: 2000 });
    }
  };

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
      <Box py={5} px={12} boxShadow={1} bgcolor="white" borderRadius={1}>
        <FromProvider
          onSubmit={handleSubmitLogin}
          resolver={zodResolver(loginValidationSchema)}
          defaultValues={defaultValue}
        >
          <Stack>
            <Typography textAlign="center" variant="h6" component="h4" pb={2}>
              Please Login !
            </Typography>
            <Grid gap={2}>
              <Grid item md={12} pb={3}>
                <PTInput
                  fullWidth={true}
                  size="small"
                  label="Email"
                  name="email"
                />
              </Grid>
              <Grid item md={12}>
                <PTInput
                  fullWidth={true}
                  size="small"
                  type="password"
                  label="Password"
                  name="password"
                />
              </Grid>
            </Grid>
            {/* <Typography component="p" pt={1}>
              Forget Password
            </Typography> */}
            <Button
              variant="contained"
              type="submit"
              fullWidth={true}
              sx={{
                marginTop: 2,
              }}
            >
              Login
            </Button>

            <Typography component="p" pt={1}>
              Don;t have an account?{" "}
              <span style={{ color: "blue" }}>
                <Link href="/register">Create an account</Link>
              </span>
            </Typography>
          </Stack>
        </FromProvider>
      </Box>
    </Grid>
  );
};

export default LoginPage;
