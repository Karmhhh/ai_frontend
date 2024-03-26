import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Stack, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";

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

export default function InputFileUpload({ file }) {
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    file.setFile(uploadedFile);
  };
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Fab
        size="medium"
        color="inherit"
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        aria-label="send"
      >
        {" "}
        <VisuallyHiddenInput onChange={handleFileChange} type="file" />
        <CloudUploadIcon style={{ fill: "#0f0f0f" }} />
      </Fab>

      {file.file !== null ? (
        <Typography margin={1} component={"p"} variant={"caption"}>
          <b>File selezionato: </b>
         <i>{file.file.name}</i>  
        </Typography>
      ) : (
        <Typography margin={1} component={"p"} variant={"caption"}>
          <b>Select File. </b>
         {" ----------- "}
        </Typography>
      )}
    </Stack>
  );
}
