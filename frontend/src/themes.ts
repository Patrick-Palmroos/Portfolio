import { createTheme } from "@mui/material/styles";
import "./index.css";

const typography = {
  fontFamily: "Lilita One, Roboto Flex",
  h1: {
    fontFamily: "Lilita One",
    color: "white",
    fontSize: "2rem",
  },
};

const darkTheme = createTheme({
  typography: typography,
  palette: {
    mode: "dark",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      default: "#27242E",
    },
    primary: {
      main: "#E8CDE5",
      light: "#B985FC",
      dark: "#A880D2",
      contrastText: "#BDFFA6",
    },
    secondary: {
      main: "#000000",
      light: "#000000",
      dark: "#978EFF",
      contrastText: "#C96BC5",
    },
  },
});

export { darkTheme };
