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
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 650px)" });
  return (
    <div>
      <Stack component={"section"} paddingTop={"8rem"} alignItems={"center"}>
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
                    : "0rem 0.6rem 0px 0px #FF74D0",
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
          <Stack
            spacing={"-1rem"}
            sx={
              isDesktop
                ? { ...titleBox }
                : isMobile
                ? {
                    ...titleBox,
                    // left: "-2rem",
                    //marginTop: "-15rem",
                    //paddingRight: "0rem",
                    width: "30vw",
                    //height: "12rem",
                  }
                : {
                    ...titleBox,
                    left: "-1rem",
                    width: "12rem",
                    height: "13rem",
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
                        fontSize: "4.5vw",
                        color: "primary.main",
                      }
                    : {
                        fontSize: "1.5rem",
                        color: "primary.main",
                      }
                }
                flexDirection={"row"}
              >
                {language === "en" ? "Hi! My name is" : "Hei! Minun nimeni on"}
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
                        fontSize: "6.5vw",
                        color: "primary.contrastText",
                      }
                    : {
                        fontSize: "3rem",
                        lineHeight: "2.8rem",
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
                        fontSize: "5.5vw",
                      }
                    : {
                        paddingTop: "0.3rem",
                        fontSize: "2rem",
                        width: "13rem",
                      }
                }
              >
                {language === "en" ? "Software Developer" : "Ohjelmoija"}
              </Typography>
            </Box>
          </Stack>
          <ContactButton title="Hello" link="#socials" />
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
                        top: "0rem",
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
