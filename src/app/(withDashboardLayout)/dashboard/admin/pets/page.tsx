"use client";
import {
  useDeletePetsMutation,
  useGetPetsQuery,
} from "@/Components/Redux/PetApi/petApi";
import {
  Box,
  Button,
  IconButton,
  Input,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { toast } from "sonner";

const PetManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deletePets, { isLoading: deleting }] = useDeletePetsMutation();
  const query: Record<string, any> = {};
  query["searchTerm"] = searchTerm;
  const { data, isLoading } = useGetPetsQuery({ ...query });
  const petData = data?.pet?.result;
  console.log("Pet", petData);

  if (isLoading) {
    <Skeleton
      sx={{ borderRadius: 2 }}
      variant="rectangular"
      width="100%"
      height={400}
    />;
  }
  const handleDeletePet = async (id: string) => {
    const toastId = toast.loading("Deleting processing...");
    try {
      const res = await deletePets(id);
      if (res?.data?.statusCode === 200) {
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
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "breed", headerName: "Breed", flex: 1 },
    // { field: "designaton", headerName: "Designation", flex: 1 },
    // { field: "qualification", headerName: "Qualification", flex: 1 },
    // { field: "appointmentFree", headerName: "Free", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box gap={3}>
            <IconButton
              onClick={() => handleDeletePet(row.id)}
              aria-label="delete"
              disabled={deleting}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>

            <Link href={`/dashboard/admin/pets/edit/${row.id}`}>
              <IconButton aria-label="visibility">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack flexDirection="row" justifyContent="space-between">
        <Link href="/dashboard/admin/pets/create">
          <Button variant="contained">Create New Pet</Button>
        </Link>
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
      </Stack>
      <Box my={5}>
        {!isLoading ? (
          <DataGrid
            //@ts-ignore
            rows={petData}
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
    </Box>
  );
};

export default PetManagement;
