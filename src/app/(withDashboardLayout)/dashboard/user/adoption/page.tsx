"use client";
import { dateFormatter } from "@/Components/Common/dateFormatter";
import { useGetUserPetAdoptionQuery } from "@/Components/Redux/userApi/userApi";
import { Avatar, Box, Button, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";

const UserAdoption = () => {
  const { data, isLoading } = useGetUserPetAdoptionQuery({});
  console.log("Data", data?.data);

  const requestData = data?.data.map(
    (request: {
      createdAt: any;
      id: any;
      user: { name: any };
      pet: {
        photos: any;
        name: any;
      };
      agreementToTerms: boolean;
      status: any;
    }): any => ({
      id: request.id,
      image: request.pet.photos,
      pet: request.pet.name,
      agreement: request.agreementToTerms === true ? "Agree" : "Disagree",
      status: request.status,
      date: dateFormatter(request.createdAt),
    })
  );

  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Photo",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box display="flex" alignItems="center">
            <Avatar alt="Remy Sharp" src={row?.image} />
          </Box>
        );
      },
    },
    { field: "pet", headerName: "Pet Name", flex: 1 },
    { field: "agreement", headerName: "Agreement Terms", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "View",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box display="flex" alignItems="center">
            <Link href={`/dashboard/user/adoption/view/${row.id}`}>
              <Button variant="contained">View</Button>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box my={5}>
        {!isLoading ? (
          <DataGrid
            //@ts-ignore
            rows={requestData || []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        ) : (
          <Skeleton
            sx={{ borderRadius: 2 }}
            variant="rectangular"
            width="100%"
            height={340}
          />
        )}
      </Box>
    </>
  );
};

export default UserAdoption;
