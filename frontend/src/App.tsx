import { Box, Stack } from "@mui/material";
import Header from "./components/Header/Header.tsx";
import TopBar from "./components/TopBar/TopBar.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Title from "./components/util/Title/Title.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { darkTheme } from "./themes.ts";

const ThemeContext = createContext("dark");

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeContext.Provider value="dark">
        <div>
          <Box
            sx={{
              minHeight: "200rem",
              backgroundColor: "background.default",
            }}
          >
            <TopBar />
            <Header />
            <Title title="My Previous Work" />
            <Projects />
            <Stack direction="row">
              <Stack>
                <Title title="About me" line={false} />
                <AboutMe />
              </Stack>
              <Stack>
                <Title title="About me" line={false} />
                <AboutMe />
              </Stack>
            </Stack>
          </Box>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
