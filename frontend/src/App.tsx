import { useState } from "react";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Header from "./components/Header/Header.tsx";
import TopBar from "./components/TopBar/TopBar.tsx";
import { Title } from "./components/util/Title/Title.tsx";
import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { darkTheme } from "./themes.ts";

const ThemeContext = createContext("dark");

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeContext.Provider value="dark">
        <div>
          <Box
            sx={{
              minHeight: "100rem",
              backgroundColor: "background.default",
            }}
          >
            <TopBar />
            <Header />
            <Title title="My Previous Work" />
          </Box>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
