"use client";

import { dateFormatter } from "@/Components/Common/dateFormatter";
import {
  useAllRequestPetAdoptionQuery,
  useUpdateRequestStatusMutation,
} from "@/Components/Redux/RequestApi/requestApi";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { toast } from "sonner";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const RequestPetPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  const { data, isLoading } = useAllRequestPetAdoptionQuery({});
  const [updateRequestStatus, { isLoading: requesting }] =
    useUpdateRequestStatusMutation();
  console.log(data?.data);
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const requestData = data?.data.map(
    (request: {
      createdAt: any;
      id: any;
      user: { name: any };
      pet: { name: any };
      agreementToTerms: boolean;
      status: any;
    }): any => ({
      id: request.id,
      name: request.user.name,
      pet: request.pet.name,
      agreement: request.agreementToTerms === true ? "Agree" : "Disagree",
      status: request.status,
      date: dateFormatter(request.createdAt),
    })
  );

  const handleEditClick = (row: any) => {
    setSelectedRow(row);
    setSelectedStatus(row.status); // Set the initial status
    setOpen(true);
  };

  const handleStatusChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  const handleSaveChanges = async () => {
    // Handle the logic to save changes here
    console.log("Selected status:", selectedStatus);
    const data = {
      status: selectedStatus,
    };
    try {
      const toastId = toast.loading("Updating status...");
      const res = await updateRequestStatus({
        //@ts-ignore
        id: selectedRow?.id,
        body: data,
      });
      console.log("res", res);
      if (res?.data?.statusCode === 200) {
        setOpen(false);
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.error(res?.data?.message, {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "User Name", flex: 1 },
    { field: "pet", headerName: "Pet Name", flex: 1 },
    { field: "agreement", headerName: "Agreement Terms", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "status",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box gap={3}>
            <Button
              variant="contained"
              onClick={() => handleEditClick(row)}
              endIcon={<EditIcon />}
            >
              {row.status}
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
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
              <Select
                sx={{
                  marginTop: "3px",
                  paddingX: 3,
                }}
                color="primary"
                size="small"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <MenuItem value={"PENDING"}>PENDING</MenuItem>
                <MenuItem value={"APPROVED"}>APPROVED</MenuItem>
                <MenuItem value={"REJECTED"}>REJECTED</MenuItem>
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
  );
};

export default RequestPetPage;
