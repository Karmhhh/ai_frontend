import "./App.css";
import { TextField, Grid, Typography } from "@mui/material";
import InputFileUpload from "./Components/ImportButton";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles, styled } from "@mui/styles";
import CustomizedTables from "./Components/Table";
import data from "./Components/mockup";
import Fab from "@mui/material/Fab";
import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://192.168.1.21:8000/pipeline";

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
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [file, setFile] = useState(null);
  const [dataState, setData] = useState([]);
  var obj = {
    question: inputText,
    file: file,
  };
  const classes = useStyles();

 const handleKeyDown = async(e) => {
    if(e.key=="Enter"){
      setCurrentQuestion(obj.question);

      const response = await axios
        .get(url, {
          params: {
            q: obj.question,
          },
        })
        .then(function (response) {
          setData(response.data);
          console.table(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      response && setInputText("");
    }
  };

 
  const handleClick = async (obj) => {
    setCurrentQuestion(obj.question);

    const response = await axios
      .get(url, {
        params: {
          q: obj.question,
        },
      })
      .then(function (response) {
        setData(response.data);
        console.table(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    response && setInputText("");
  };

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
          AI Frontend Chat <img alt="logo_" src="logo192.png" height={"20px"} />
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
        {currentQuestion && dataState.length > 0 && (
          <>
            <Typography component={"p"} variant={"overline"}>
              {obj.question}
            </Typography>
            <CustomizedTables data={dataState} />
          </>
        )}
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
            onKeyDown={(e) => handleKeyDown(e)}
            value={inputText}
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
          <InputFileUpload file={{ file, setFile }} />
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}>
          <Fab
            sx={{ width: "100%" }}
            variant="extended"
            color="inherit"
            aria-label="send"
            onClick={() => {
              handleClick(obj);
            }}
          >
            <SendIcon style={{ fill: "#0f0f0f" }} />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
