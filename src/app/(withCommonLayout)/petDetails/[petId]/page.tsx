"use client";
import { useGetSinglePetQuery } from "@/Components/Redux/PetApi/petApi";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getUserInfo } from "@/Components/Auth/authService";
import { useRequestPetAdoptionMutation } from "@/Components/Redux/RequestApi/requestApi";
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
  additionalInfo: string;
  agreementToTerms: boolean;
}

const PetDetailsPage = (params: any) => {
  const { petId } = useParams();
  const { data, isLoading } = useGetSinglePetQuery(petId);
  const [requestPetAdoption, { isLoading: requesting }] =
    useRequestPetAdoptionMutation();
  const pet = data?.data;

  const [userId, setUserId] = useState("");
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo && userInfo.id) {
      setUserId(userInfo.id);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const agreementToTerms = watch("agreementToTerms", true);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Request processing...");
    const requestData = {
      userId: userId,
      petId: pet.id,
      ...data,
    };
    try {
      const res = await requestPetAdoption(requestData);
      console.log("Res", res?.data);
      if (res?.data?.statusCode === 201) {
        setOpen(false);
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error(err?.message || "Something went wrong !", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(pet);
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const commonStyle = {
    backgroundColor: "#ffefed",
    padding: 1,
    mb: "8px",
  };

  return (
    <Box py={8}>
      <Container>
        {isLoading ? (
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Skeleton variant="rectangular" width={300} height={250} />
            <Skeleton variant="rectangular" width={300} height={250} />
            <Skeleton variant="rectangular" width={300} height={250} />
          </Box>
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            justifyItems="center"
            gap={5}
            width={"100%"}
            p={5}
          >
            <Box
              width={"40%"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                "&img": {
                  width: "100%",
                },
              }}
            >
              <Image
                src={pet?.photos}
                height={300}
                width={300}
                objectFit="cover"
                alt="pet"
              />
            </Box>
            <Stack direction="row" gap={5} width="60%">
              <Box width="50%">
                <Typography sx={{ ...commonStyle }}>
                  Name:{pet?.name}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Species:{pet?.species}
                </Typography>
                <Typography sx={{ ...commonStyle }}>Age:{pet?.age}</Typography>
                <Typography sx={{ ...commonStyle }}>
                  Size:{pet?.size}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Gender:{pet?.gender}
                </Typography>
              </Box>
              <Box width="50%">
                <Typography sx={{ ...commonStyle }}>
                  Breed:{pet?.breed}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Health Status:{pet?.healthStatus}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Location:{pet?.location}
                </Typography>

                <Typography sx={{ ...commonStyle }}>
                  Description:{pet?.description}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        )}
        <Box textAlign="center">
          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{
              backgroundColor: "#ff6347",
              ":hover": {
                backgroundColor: "#ff6347",
                color: "white",
              },
            }}
          >
            Request for Pet Adoption
          </Button>
        </Box>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Pet Name: {pet?.name}
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
                {...register("additionalInfo", {
                  required: "This field is required",
                })}
                size="medium"
                fullWidth
                id="outlined-multiline-static"
                label="Adoption Info"
                multiline
                rows={2}
                error={!!errors.additionalInfo}
                helperText={
                  errors.additionalInfo ? errors.additionalInfo.message : ""
                }
              />
              <FormControlLabel
                control={
                  <Checkbox {...register("agreementToTerms")} defaultChecked />
                }
                label="Agreement To Terms"
              />
            </DialogContent>
            <DialogActions
              sx={{
                marginY: 1,
              }}
            >
              <Button
                fullWidth={true}
                variant="contained"
                sx={{
                  backgroundColor: "#ff6347",
                  ":hover": {
                    backgroundColor: "#ff6347",
                    color: "white",
                  },
                }}
                disabled={!agreementToTerms || requesting}
                autoFocus
                type="submit"
              >
                Request
              </Button>
            </DialogActions>
          </form>
        </BootstrapDialog>
      </Container>
    </Box>
  );
};

export default PetDetailsPage;
