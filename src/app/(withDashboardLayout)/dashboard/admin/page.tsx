"use client";
import { useMetaDataQuery } from "@/Components/Redux/PetApi/petApi";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const AdminDashboard = () => {
  const { data, isLoading } = useMetaDataQuery({});
  const meta = data?.data;
  console.log(meta);
  const statuses = meta?.piaData.map((item: { status: any }) => item.status);
  const counts = meta?.piaData.map((item: { count: any }) => item.count);
  console.log({ statuses, counts });

  const statusData = statuses || ["N/A", "N/A"];
  const countData = counts || [1, 1, 1];

  if (isLoading) {
    <h1>Loading</h1>;
  }

  return (
    <Container>
      <Grid container spacing={5} py={5}>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#FE772A",
              color: "white",
              padding: 3,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="p">
              {meta?.user || 0}
            </Typography>
            <Typography variant="h6" component="p">
              Total Users
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#FE772A",
              color: "white",
              padding: 3,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="p">
              {meta?.pet || 0}
            </Typography>
            <Typography variant="h6" component="p">
              Total Pets
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#FE772A",
              color: "white",
              padding: 3,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="p">
              {meta?.adoption || 0}
            </Typography>
            <Typography variant="h6" component="p">
              Total Adoptions
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <BarChart
          sx={{
            backgroundColor: "#F4F7FE",
          }}
          xAxis={[
            {
              id: "barCategories",
              data: [...statusData],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [...countData],
            },
          ]}
          height={300}
        />
      </Box>
    </Container>
  );
};

export default AdminDashboard;
