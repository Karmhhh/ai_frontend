import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({file}) {
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    file.setFile(uploadedFile);
  };
  return (
    <Stack direction={"column"}>
      <Button
        color="inherit"
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        endIcon={<CloudUploadIcon />}
      >
        Upload
        <VisuallyHiddenInput onChange={handleFileChange} type="file" />
      </Button>{" "}
      {file.file && (
        <Typography margin={2} component={"p"} variant={"caption"}>
          <b>File selezionato: </b>
          {file.file.name}
        </Typography>
      )}
    </Stack>
  );
}
