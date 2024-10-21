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
import Socials from "./components/Socials/Socials.tsx";
import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { darkTheme } from "./themes.ts";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ThemeContext = createContext("dark");

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1224px)" });
  const [display, setDisplay] = useState<boolean>(false);
  useEffect(() => {
    // Check if there's a hash in the URL
    setDisplay(false);
    window.scrollTo(0, 0);
    if (window.location.hash) {
      // Remove the hash from the URL
      window.history.replaceState("null", "", window.location.pathname);
    }
    setTimeout(() => {
      setDisplay(true);
    }, 100);
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeContext.Provider value="dark">
        <div id="#">
          <Box
            sx={{
              minHeight: "100%",
              overflowX: "hidden",
              backgroundColor: "background.default",
            }}
          >
            <TopBar />
            <Header />
            {display ? (
              <Box>
                <div id="projects" />
                <Box
                  sx={
                    isDesktop
                      ? { marginLeft: "11rem", marginRight: "9rem" }
                      : { marginLeft: "3rem", marginRight: "3rem" }
                  }
                  marginLeft={"11rem"}
                  marginRight={"9rem"}
                  marginTop={"4rem"}
                >
                  <ScrollAnimation
                    initiallyVisible={isTabletOrMobile}
                    animateIn={"fadeInDown"}
                    duration={0.5}
                    animateOnce={true}
                  >
                    <Title title="My Previous Projects" />
                  </ScrollAnimation>
                </Box>
                <Projects />
                <Stack
                  direction={isTabletOrMobile ? "row" : "column"}
                  paddingTop={isTabletOrMobile ? "8rem" : "2rem"}
                  spacing={2}
                  alignItems={isTabletOrMobile ? "flex-start" : "center"}
                  justifyContent={"center"}
                >
                  <Stack
                    paddingRight={"1rem"}
                    paddingLeft={"3rem"}
                    alignItems={isTabletOrMobile ? "flex-start" : "center"}
                  >
                    <div id="aboutMe" />
                    <Box
                      marginLeft={isTabletOrMobile ? "2rem" : "-2rem"}
                      sx={isTabletOrMobile ? null : { width: "80vw" }}
                    >
                      <ScrollAnimation
                        animateIn={"fadeInLeft"}
                        duration={0.5}
                        animateOnce={true}
                      >
                        <Title title="About Me" line={!isTabletOrMobile} />
                      </ScrollAnimation>
                    </Box>
                    <AboutMe />
                  </Stack>
                  <Box paddingTop={"6rem"}>
                    {isTabletOrMobile ? <Line maxHeight={"1rem"} /> : null}
                  </Box>
                  <Stack paddingLeft={"1rem"}>
                    <div id="skills" />
                    <ScrollAnimation
                      animateIn={"fadeInRight"}
                      delay={200}
                      duration={0.5}
                      animateOnce={true}
                    >
                      <Title title="Skills" line={false} />
                    </ScrollAnimation>

                    <Skills />
                  </Stack>
                </Stack>
                <div id="work">
                  <Box
                    marginLeft={"11rem"}
                    marginRight={"9rem"}
                    marginTop={"4rem"}
                  >
                    <ScrollAnimation
                      animateIn={"fadeInLeft"}
                      duration={0.5}
                      animateOnce={true}
                    >
                      <Title title="Work Experience" />
                    </ScrollAnimation>
                  </Box>
                  <ScrollAnimation
                    animateIn={"fadeInRight"}
                    duration={0.5}
                    delay={100}
                    animateOnce={true}
                  >
                    <WorkExperience />
                  </ScrollAnimation>
                </div>
                <div id="education">
                  <Box
                    marginLeft={"11rem"}
                    marginRight={"9rem"}
                    marginTop={"8rem"}
                  >
                    <ScrollAnimation
                      animateIn={"fadeInRight"}
                      duration={0.5}
                      delay={0}
                      animateOnce={true}
                    >
                      <Title title="Education" />
                    </ScrollAnimation>
                  </Box>
                  <Education />
                </div>
                <div
                  id="socials"
                  style={{
                    marginTop: "30rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    height: "20rem",
                    backgroundColor: "#19121c",
                  }}
                >
                  <Box
                    marginLeft={"0rem"}
                    marginBottom={"5rem"}
                    marginRight={"2rem"}
                    width={"30rem"}
                  >
                    <Title title="Contact Me!" />
                  </Box>
                  <Socials />
                </div>
              </Box>
            ) : (
              <Box sx={{ height: "300rem" }} />
            )}
          </Box>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
