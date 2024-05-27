import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const RecentAdoption = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: 2,
        mt: 2,
      }}
    >
      <Typography variant="h6" mb={2} color="#FE772A">
        Recent Adoption Pets
      </Typography>
      <Box display="flex" alignItems="center" gap={2} my={2}>
        <Image
          src="https://img.freepik.com/free-photo/beautiful-shot-cute-chi-weenie-dog-walking-wooden-pathway_181624-6577.jpg?t=st=1716756878~exp=1716760478~hmac=a4b093f662c5d942948ccb3e141790b47ea3da1fff191102d0bf1d4820d29acd&w=740"
          alt="Adopted Pet"
          height={100}
          width={100}
        />
        <Box>
          <Typography fontWeight="bold" variant="body1" component="p">
            Adopting and Caring for a Cat with Special
          </Typography>
          <Typography color="textSecondary">January 24, 2023</Typography>
        </Box>
      </Box>
      <Divider />

      {/* Second Adoption Item */}
      <Box display="flex" alignItems="center" gap={2} my={2}>
        <Image
          src="https://img.freepik.com/free-photo/beautiful-shot-cute-chi-weenie-dog-walking-wooden-pathway_181624-6577.jpg?t=st=1716756878~exp=1716760478~hmac=a4b093f662c5d942948ccb3e141790b47ea3da1fff191102d0bf1d4820d29acd&w=740"
          alt="Adopted Pet"
          height={100}
          width={100}
        />
        <Box>
          <Typography fontWeight="bold">
            How to Train Your New Dog: Tips and Tricks
          </Typography>
          <Typography color="textSecondary">February 15, 2023</Typography>
        </Box>
      </Box>
      <Divider />
      {/* Second Adoption Item */}
      <Box display="flex" alignItems="center" gap={2} my={2}>
        <Image
          src="https://img.freepik.com/free-photo/beautiful-shot-cute-chi-weenie-dog-walking-wooden-pathway_181624-6577.jpg?t=st=1716756878~exp=1716760478~hmac=a4b093f662c5d942948ccb3e141790b47ea3da1fff191102d0bf1d4820d29acd&w=740"
          alt="Adopted Pet"
          height={100}
          width={100}
        />
        <Box>
          <Typography fontWeight="bold">
            The Joy of Adopting a Senior Pet
          </Typography>
          <Typography color="textSecondary">March 10, 2023</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentAdoption;
