import { Box, Stack } from "@mui/material";
import Header from "./components/Header/Header.tsx";
import TopBar from "./components/TopBar/TopBar.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Title from "./components/util/Title/Title.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Line from "./components/util/Line/Line.tsx";
import Skills from "./components/Skills/Skills.tsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.tsx";
import Education from "./components/Education/Education.tsx";
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
              minHeight: "300rem",
              backgroundColor: "background.default",
            }}
          >
            <TopBar />
            <Header />
            <Box marginLeft={"11rem"}>
              <Title title="My Previous Projects" />
            </Box>
            <Projects />
            <Stack
              direction="row"
              spacing={2}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Stack paddingRight={"1rem"} paddingLeft={"3rem"}>
                <Box marginLeft={"2rem"}>
                  <Title title="About Me" line={false} />
                </Box>
                <AboutMe />
              </Stack>
              <Box paddingTop={"6rem"}>
                <Line maxHeight={"1rem"} />
              </Box>
              <Stack paddingLeft={"1rem"}>
                <Title title="Skills" line={false} />

                <Skills />
              </Stack>
            </Stack>
            <Box marginLeft={"11rem"} marginTop={"-3rem"}>
              <Title title="Work Experience" />
            </Box>
            <WorkExperience />
            <div id="education">
              <Box marginLeft={"11rem"} marginTop={"-1rem"}>
                <Title title="Education" />
              </Box>
              <Education />
            </div>
          </Box>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
