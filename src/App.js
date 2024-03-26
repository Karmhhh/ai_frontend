import "./App.css";
import {
  TextField,
  Divider,
  Stack,
  IconButton,
  Grid,
  Table,
  Typography,
} from "@mui/material";
import InputFileUpload from "./Components/ImportButton";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles, styled } from "@mui/styles";
import CustomizedTables from "./Components/Table";
import data from "./mockup";
import { useEffect, useState } from "react";
const useStyles = makeStyles({
  whiteBorder: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white !important", // Imposta il colore del bordo su bianco
      },
    },
  },
});
const WhiteTextTextField = styled(TextField)({
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#FFFFFF", // Imposta il colore del testo su bianco
  },
});

function App() {
  const [inputText, setInputText] = useState("");
  const [file, setFile] = useState(null);

  const classes = useStyles();
  return (
    <div className="App">
      <Grid direction={"column"} container padding={"3rem"}>
        <Grid item>
          <Typography component={"h6"} variant="h5">
            AI Frontend Chat
          </Typography>
        </Grid>
        <Grid item padding={"1rem 3rem"} sx={{ height: "78vh" }}>
          <CustomizedTables data={data} />
        </Grid>

        <Grid item>
          <Stack
            padding={"1rem 3rem"}
            direction={"row"}
            spacing={3}
            alignItems={"center"}
          >
            <WhiteTextTextField
              onChange={(e) => setInputText(e.target.value)}
              className={classes.whiteBorder}
              fullWidth
              placeholder="Type your question here!"
              id="fullWidth"
              style={{ color: "#FFFFFF" }}
              sx={{
                borderRadius: "10px",
              }}
            />

            <InputFileUpload file={{ file, setFile }} />
            <Divider
              orientation="vertical"
              sx={{ background: "whitesmoke" }}
              variant="middle"
              flexItem
            />

            <IconButton color="inherit">
              <SendIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;