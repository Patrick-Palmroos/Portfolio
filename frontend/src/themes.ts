import { createTheme } from "@mui/material/styles";
import "./index.css";

const typography = {
  fontFamily: "Lilita One, Roboto Flex",
  h1: {
    fontFamily: "Lilita One",
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
