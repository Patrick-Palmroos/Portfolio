import {
  backgroundBox,
  circle,
  pfpStyle,
  logoStyle,
  titleBox,
} from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";
import pfp from "../../assets/me.png";
import logos from "../../assets/logos.png";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../util/languageContext";
import ContactButton from "../util/ContactButton/ContactButton";

export default function Header() {
  const { language } = useLanguage();
  const smallTopBar = useMediaQuery({ query: "(min-width: 1080px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 650px)" });

  return (
    <div>
      <Stack
        component={"section"}
        paddingTop={smallTopBar ? "8rem" : "6.7rem"}
        alignItems={"center"}
      >
        {/*The box component. */}
        <Box
          display={"flex"}
          justifyContent={isDesktop ? "space-around" : "space-around"}
          alignItems={"center"}
          sx={
            isDesktop
              ? {
                  ...backgroundBox,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "linear-gradient(-110deg, #e8cde500 36%, #B985FC)",
                    zIndex: -1,
                  },
                }
              : {
                  ...backgroundBox,
                  margin: isMobile ? "0px 3rem 0px 2rem" : "0rem",
                  borderRadius: isMobile ? "10px" : "0rem",
                  boxShadow: isMobile
                    ? "1rem -0.6rem 0px 0px #FF74D0"
                    : "0rem 0.1rem 10px 0px rgba(20,0,23,1)",
                  marginTop: isMobile ? "0rem" : "-2.5rem",
                  width: isMobile ? "90%" : "100%",
                  height: "30rem",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                      "linear-gradient(-110deg, #e8cde500 10%, #B985FC)",
                    zIndex: -1,
                  },
                }
          }
        >
          <Stack alignItems={"center"}>
            <Stack
              spacing={"-1rem"}
              sx={
                isDesktop
                  ? { ...titleBox }
                  : isMobile
                  ? {
                      ...titleBox,
                      width: "30vw",
                    }
                  : {
                      ...titleBox,
                      left: "-2rem",
                      width: "8.5rem",
                      height: "10rem",
                    }
              }
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Typography
                  variant={"h1"}
                  sx={
                    isDesktop
                      ? {
                          fontSize: "3vw",
                          color: "primary.main",
                        }
                      : isMobile
                      ? {
                          fontSize: "4vw",
                          color: "primary.main",
                        }
                      : {
                          fontSize: "1.2rem",
                          color: "primary.main",
                        }
                  }
                  flexDirection={"row"}
                >
                  {language === "en"
                    ? "Hi! My name is"
                    : "Hei! Minun nimeni on"}
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isDesktop
                      ? {
                          fontSize: "5vw",
                          color: "primary.contrastText",
                        }
                      : isMobile
                      ? {
                          fontSize: "6vw",
                          color: "primary.contrastText",
                        }
                      : {
                          fontSize: "2.4rem",
                          lineHeight: "2.3rem",
                          color: "primary.contrastText",
                        }
                  }
                >
                  Patrick Palmroos
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isDesktop
                      ? {
                          fontSize: "4vw",
                        }
                      : isMobile
                      ? {
                          fontSize: "5vw",
                        }
                      : {
                          paddingTop: "0.3rem",
                          fontSize: "1.7rem",
                          lineHeight: "1.6rem",
                          width: "13rem",
                        }
                  }
                >
                  {language === "en" ? "Software Developer" : "Ohjelmoija"}
                </Typography>
              </Box>
            </Stack>
            {/*Contact button*/}
            <Box
              sx={{
                position: "relative",
                zIndex: 5,
                top: "2rem",
                left: isMobile ? "-3rem" : "-2rem",
              }}
            >
              <ContactButton
                title={
                  language === "en" ? "Work With Me!" : "Työskentele kanssani!"
                }
                link="#socials"
              />
            </Box>
          </Stack>
          {/*logos */}
          <img
            src={logos}
            alt="Logos"
            style={
              isDesktop
                ? { ...logoStyle }
                : {
                    ...logoStyle,
                    height: "100%",
                    width: "auto",
                  }
            }
          />
          {/*circle behind profile picture */}
          <Box sx={{ position: "relative" }}>
            <Box
              sx={
                isDesktop
                  ? { ...circle }
                  : {
                      ...circle,
                      background: "rgba(232, 205, 229, 0.5)",
                      bottom: "-22rem",
                      left: "-17rem",
                      width: "33rem",
                      height: "33rem",
                    }
              }
            >
              {/*Profile Picture */}
              <img
                src={pfp}
                alt="Picture of Patrick Palmroos"
                style={
                  isDesktop
                    ? { ...pfpStyle }
                    : {
                        ...pfpStyle,
                        width: "28rem",
                        top: "-2rem",
                        right: "2.4rem",
                      }
                }
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
