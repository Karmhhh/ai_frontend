import "./App.css";
import { TextField, Divider, Stack, Grid, Typography } from "@mui/material";
import InputFileUpload from "./Components/ImportButton";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles, styled } from "@mui/styles";
import CustomizedTables from "./Components/Table";
import data from "./Components/mockup";
import Fab from "@mui/material/Fab";
import { useState } from "react";
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
    <Grid
      direction={"row"}
      className="App"
      xl={12}
      container
      padding={"0rem 1rem"}
    >
      {/* Qui in questa Grid troviamo il Titolo */}
      <Grid item xs={12} md={12} lg={12}>
        <Typography component={"i"} variant="h5">
          AI Frontend Chat <img src="logo192.png" height={"20px"}/>
        </Typography>
      </Grid>

      {/* Qui in questa Grid viene mostrato l'Output */}
      <Grid
        item
        xs={12}
        md={12}
        xl={12}
        lg={12}
        padding={"0rem 1rem"}
        sx={{ height: "75vh" }}
      >
        {data.length > 0 && <CustomizedTables data={data} />}
      </Grid>

      {/* Qui in questa Grid vengono implementati gli Input */}
      <Grid
        item
        container
        spacing={3}
        xs={12}
        lg={12}
        md={12}
        alignItems={"center"}
        padding={"0 1rem"}
      >
        <Grid item xs={9} sm={10} md={9} lg={10}>
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
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1}>
          <InputFileUpload file={{ file, setFile }} />{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={12} md={1} lg={1}>
          <Fab
            sx={{ width: "100%" }}
            variant="extended"
            color="inherit"
            aria-label="send"
          >
            <SendIcon style={{ fill: "#0f0f0f" }} />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
