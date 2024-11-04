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
import { LanguageProvider } from "./components/util/languageContext.tsx";

const ThemeContext = createContext("dark");

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1224px)" });
  const mobileFooter = useMediaQuery({ query: "(min-width: 960px)" });
  const smallerSkills = useMediaQuery({ query: "(min-width: 730px)" });
  const smallTitle = useMediaQuery({ query: "(min-width: 780px)" });
  const smallProjects = useMediaQuery({ query: "(min-width: 550px)" });
  const [display, setDisplay] = useState<boolean>(false);
  const [language, setCurrentLanguage] = useState("en");

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
    <LanguageProvider>
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
              <TopBar
                titleLang={(lang: string) => {
                  setCurrentLanguage(lang);
                }}
              />
              <Header />
              {display ? (
                <Box>
                  <div id="projects" />
                  <Box
                    sx={{
                      backgroundColor: "#251725",
                      paddingBottom: smallProjects ? "4rem" : "3rem",
                      paddingTop: smallProjects ? "0rem" : "0rem",
                      marginTop: smallProjects ? "6rem" : "8rem",
                    }}
                  >
                    <Box marginTop={"4rem"}>
                      <Box
                        sx={
                          isTabletOrMobile
                            ? {
                                marginLeft: "11rem",
                                marginRight: "9rem",
                              }
                            : { marginLeft: "4rem", marginRight: "4rem" }
                        }
                      >
                        <Title
                          title={
                            language === "en"
                              ? "My Previous Projects"
                              : "Aiemmat Projektini"
                          }
                        />
                      </Box>
                    </Box>
                    <Projects />
                  </Box>
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
                      paddingBottom={
                        isTabletOrMobile
                          ? "0rem"
                          : mobileFooter
                          ? "12rem"
                          : smallTitle
                          ? "6rem"
                          : "2rem"
                      }
                      alignItems={isTabletOrMobile ? "flex-start" : "center"}
                      height={isTabletOrMobile ? "40rem" : "40rem"}
                    >
                      <div id="aboutMe" />
                      <Box
                        marginTop={
                          isTabletOrMobile
                            ? "0rem"
                            : smallTitle
                            ? "8rem"
                            : "3rem"
                        }
                        marginLeft={
                          isTabletOrMobile
                            ? "0rem"
                            : smallTitle
                            ? "5rem"
                            : "-1rem"
                        }
                        marginRight={smallTitle ? "9rem" : "1.5rem"}
                        sx={isTabletOrMobile ? null : { width: "40rem" }}
                        marginBottom={isTabletOrMobile ? "0rem" : "1rem"}
                      >
                        <ScrollAnimation
                          animateIn={"fadeInLeft"}
                          duration={0.5}
                          animateOnce={true}
                        >
                          <Title
                            title={
                              language === "en" ? "About Me" : "Tietoja Minusta"
                            }
                            line={!isTabletOrMobile}
                          />
                        </ScrollAnimation>
                      </Box>
                      <AboutMe />
                    </Stack>
                    <Box paddingTop={isTabletOrMobile ? "6rem" : "0rem"}>
                      {isTabletOrMobile ? <Line /> : null}
                    </Box>
                    <Stack
                      paddingLeft={isTabletOrMobile ? "1rem" : "0rem"}
                      alignItems={isTabletOrMobile ? "flex-start" : "center"}
                      sx={
                        isTabletOrMobile
                          ? null
                          : {
                              backgroundColor: "#1e1d28",
                              width: "100%",
                            }
                      }
                    >
                      <div id="skills" />

                      <Box
                        marginLeft={
                          isTabletOrMobile
                            ? "0rem"
                            : smallTitle
                            ? "11rem"
                            : "1rem"
                        }
                        marginTop={"0rem"}
                        marginRight={smallTitle ? "9rem" : "1.5rem"}
                        sx={isTabletOrMobile ? null : { width: "45rem" }}
                        marginBottom={
                          isTabletOrMobile
                            ? "0rem"
                            : smallerSkills
                            ? "0rem"
                            : "4rem"
                        }
                      >
                        <ScrollAnimation
                          animateIn={"fadeInRight"}
                          delay={200}
                          duration={0.5}
                          animateOnce={true}
                        >
                          <Title
                            title={language === "en" ? "Skills" : "Taidot"}
                            line={!isTabletOrMobile}
                          />
                        </ScrollAnimation>
                      </Box>

                      <Skills />
                    </Stack>
                  </Stack>
                  <div id="work">
                    <Box
                      sx={
                        isTabletOrMobile ? { backgroundColor: "#1e1d28" } : null
                      }
                    >
                      <Box
                        marginLeft={smallTitle ? "11rem" : "1rem"}
                        marginRight={smallTitle ? "9rem" : "1.5rem"}
                        marginTop={smallTitle ? "4rem" : "2rem"}
                      >
                        <ScrollAnimation
                          animateIn={"fadeInLeft"}
                          duration={0.5}
                          animateOnce={true}
                        >
                          <Title
                            title={
                              language === "en"
                                ? "Work Experience"
                                : "Työkokemus"
                            }
                          />
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
                    </Box>
                  </div>
                  <div id="education">
                    <Box
                      marginLeft={smallTitle ? "11rem" : "1rem"}
                      marginRight={smallTitle ? "9rem" : "1.5rem"}
                      marginTop={smallTitle ? "4rem" : "2rem"}
                    >
                      <ScrollAnimation
                        animateIn={"fadeInRight"}
                        duration={0.5}
                        delay={0}
                        animateOnce={true}
                      >
                        <Title
                          title={language === "en" ? "Education" : "Koulutus"}
                        />
                      </ScrollAnimation>
                    </Box>
                    <Education />
                  </div>
                  <div
                    id="socials"
                    style={{
                      marginTop: mobileFooter ? "30rem" : "15rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: mobileFooter ? "center" : "flex-end",
                      flexDirection: mobileFooter ? "row" : "column",
                      height: "20rem",
                      backgroundColor: "#19121c",
                    }}
                  >
                    <Box
                      marginLeft={"1rem"}
                      marginBottom={mobileFooter ? "2rem" : "0.5rem"}
                      marginRight={"2rem"}
                      width={"30rem"}
                    >
                      <Title
                        title={
                          language === "en" ? "Contact Me!" : "Ota Yhteyttä!"
                        }
                      />
                    </Box>
                    <Box sx={mobileFooter ? null : { marginBottom: "2rem" }}>
                      <Socials />
                    </Box>
                  </div>
                </Box>
              ) : (
                <Box sx={{ height: "300rem" }} />
              )}
            </Box>
          </div>
        </ThemeContext.Provider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
