import { createTheme } from "@mui/material/styles";
import "./index.css";
import { colors } from "@mui/material";

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
    },
  },
});

export { darkTheme };
