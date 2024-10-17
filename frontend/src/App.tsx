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
            <div id="projects" />
            <Box marginLeft={"11rem"} marginTop={"4rem"}>
              <Title title="My Previous Projects" />
            </Box>
            <Projects />
            <Stack
              direction="row"
              paddingTop={"8rem"}
              spacing={2}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Stack paddingRight={"1rem"} paddingLeft={"3rem"}>
                <div id="aboutMe" />
                <Box marginLeft={"2rem"}>
                  <Title title="About Me" line={false} />
                </Box>
                <AboutMe />
              </Stack>
              <Box paddingTop={"6rem"}>
                <Line maxHeight={"1rem"} />
              </Box>
              <Stack paddingLeft={"1rem"}>
                <div id="skills" />
                <Title title="Skills" line={false} />

                <Skills />
              </Stack>
            </Stack>
            <div id="work">
              <Box marginLeft={"11rem"} marginTop={"4rem"}>
                <Title title="Work Experience" />
              </Box>
              <WorkExperience />
            </div>
            <div id="education">
              <Box marginLeft={"11rem"} marginTop={"8rem"}>
                <Title title="Education" />
              </Box>
              <Education />
            </div>
            <div id="socials">
              <Box marginLeft={"11rem"} marginTop={"8rem"}>
                <Title title="Contact Me!" />
              </Box>
            </div>
          </Box>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
