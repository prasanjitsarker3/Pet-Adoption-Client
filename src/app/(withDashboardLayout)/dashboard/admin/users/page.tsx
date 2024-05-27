"use client";

import {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "@/Components/Redux/userApi/userApi";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Label } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [updateUserRole, { isLoading: roleUpdating }] =
    useUpdateUserRoleMutation();

  const { data, isLoading } = useGetAllUserQuery({});
  const [updateUserStatus] = useUpdateUserStatusMutation();
  console.log("User ", data?.data);
  if (isLoading) {
    <h1>Loading ...</h1>;
  }
  //User Status Change Active to D active
  const [values, setValues] = useState({});
  useEffect(() => {
    if (data?.data) {
      const initialValues = data.data.reduce((acc: any, row: any) => {
        acc[row.id] = row.action;
        return acc;
      }, {});
      setValues(initialValues);
    }
  }, [data]);

  const handleChange = (id: any) => async (event: SelectChangeEvent) => {
    const { value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));

    const userData = {
      action: value,
    };
    try {
      const res = await updateUserStatus({ id, body: userData });
      console.log("Check", res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message);
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error(err?.message || "Something went wrong");
    }

    // console.log("Row ID:", id, "Selected Value:", value); // Log the row ID and selected value
  };

  //User  role change Active to D active

  const handleEditClick = (row: any) => {
    setSelectedRow(row);
    setSelectedStatus(row.status); // Set the initial status
    setOpen(true);
  };

  const handleStatusChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  const handleSaveChanges = async () => {
    const roleData = {
      role: selectedStatus,
    };
    try {
      const toastId = toast.loading("Updating role...");

      const res = await updateUserRole({
        //@ts-ignore
        id: selectedRow?.id,
        body: roleData,
      });
      if (res?.data?.statusCode === 200) {
        setOpen(false);
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.error(res?.data?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "email", flex: 1 },
    {
      field: "role",
      headerName: "Role/Change",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        console.log("Check", row.role);
        return (
          <Box gap={3}>
            <Button
              onClick={() => handleEditClick(row)}
              variant="contained"
              endIcon={<EditIcon />}
            >
              {row?.role}
            </Button>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box gap={3}>
            <FormControl fullWidth>
              <Select
                sx={{
                  marginTop: "3px",
                }}
                color="primary"
                size="small"
                id={`select-${row.id}`}
                //@ts-ignore
                value={values[row.id] || row.action}
                onChange={handleChange(row.id)}
              >
                <MenuItem value={"Deactivate"}>Deactivate</MenuItem>
                <MenuItem value={"Activate"}>Activate</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <Box my={5}>
        {!isLoading ? (
          <DataGrid
            //@ts-ignore
            rows={data?.data}
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

        <BootstrapDialog
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, pt: 5, px: 8 }}
            id="customized-dialog-title"
          >
            Update Pet Adoption Request
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
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
            <Box p={1}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select new role
                </InputLabel>
                <Select
                  color="primary"
                  size="medium"
                  placeholder="Select"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                >
                  <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                  <MenuItem value={"MANEGER"}>MANAGER</MenuItem>
                  <MenuItem value={"REJECTED"}>USER</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              m: 2,
            }}
          >
            <Button
              fullWidth={true}
              autoFocus
              onClick={handleSaveChanges}
              variant="contained"
            >
              Status changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </div>
  );
};

export default UserManagement;
