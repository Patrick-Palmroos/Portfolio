import { useState } from "react";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Header from "./components/Header.tsx";
import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { darkTheme } from "./themes.ts";

const ThemeContext = createContext("dark");

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeContext.Provider value="dark">
        <Box component={"section"} sx={{ backgroundColor: "common.black" }}>
          <div>
            <Header />
          </div>
        </Box>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
