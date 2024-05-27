"use client";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { Box, Button, Input, SvgIconProps, SxProps } from "@mui/material";
import { ReactElement } from "react";

interface IFileUploadButton {
  name: string;
  label?: string;
  accept?: string;
  sx?: SxProps;
  icon?: ReactElement<SvgIconProps>;
  variant?: "contained" | "text";
  onFileUpload: (file: File) => void;
}

const PTFileUploader = ({
  name,
  label,
  accept,
  sx,
  icon,
  variant = "contained",
  onFileUpload,
}: IFileUploadButton) => {
  return (
    <Box>
      <Button
        component="label"
        fullWidth={true}
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={icon ? icon : <CloudUploadIcon />}
        sx={{ ...sx }}
      >
        {label || "Upload file"}
        <Input
          type="file"
          fullWidth={true}
          inputProps={{ accept: accept }}
          style={{ display: "none" }}
          onChange={(e) => {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
              onFileUpload(file);
            }
          }}
        />
      </Button>
    </Box>
  );
};

export default PTFileUploader;
