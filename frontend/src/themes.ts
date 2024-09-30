import { createTheme } from "@mui/material/styles";
import "./index.css";

const typography = {};

const darkTheme = createTheme({
  typography: typography,
  palette: {
    mode: "dark",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      default: "27242E",
    },
  },
});

export { darkTheme };
