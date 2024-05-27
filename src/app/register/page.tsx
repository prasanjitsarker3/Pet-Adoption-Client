"use client";

import { storeUserInfo } from "@/Components/Auth/authService";
import FromProvider from "@/Components/ReactHookFrom/FormProvider";
import PTInput from "@/Components/ReactHookFrom/PTInput";
import { userLogin } from "@/Components/ServerAction/userLogin";
import { userRegister } from "@/Components/ServerAction/userRegister";
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

// const loginValidationSchema = z.object({
//   name: z.string({ required_error: "Name is required1" }),
//   email: z.string().email("Email is required !"),
//   password: z.string().min(6, "Must be at least 6 characters !"),
// });

const defaultValue = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleSubmitLogin = async (values: FieldValues) => {
    const toastId = toast.loading("Register Processing...");
    try {
      const res = await userRegister(values);
      console.log("Res", res);
      if (res.data?.id) {
        const loginRes = await userLogin({
          email: values.email,
          password: values.password,
        });
        console.log(loginRes);
        if (loginRes?.data?.id) {
          storeUserInfo({ accessToken: loginRes?.data?.token });
          toast.success(res?.message, { id: toastId, duration: 2000 });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err?.message);
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
          //   resolver={zodResolver(loginValidationSchema)}
          defaultValues={defaultValue}
        >
          <Stack>
            <Typography textAlign="center" variant="h6" component="h4" pb={2}>
              Please Register !
            </Typography>
            <Grid gap={2}>
              <Grid item md={12} pb={3}>
                <PTInput
                  fullWidth={true}
                  size="small"
                  label="Name"
                  name="name"
                />
              </Grid>
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
              Do you already have an account?{" "}
              <span style={{ color: "blue" }}>
                <Link href="/login">Login</Link>
              </span>
            </Typography>
          </Stack>
        </FromProvider>
      </Box>
    </Grid>
  );
};

export default RegisterPage;
