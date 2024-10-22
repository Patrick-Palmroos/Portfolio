import { Box, Stack, Typography } from "@mui/material";
import {
  container,
  educationBox,
  educationBackdrop,
  imageStyle,
  titleStyle,
  subtitleStyle,
} from "./EducationStyle";
import ScrollAnimation from "react-animate-on-scroll";
import { useMediaQuery } from "react-responsive";

export default function Education() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1020px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 750px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 450px)" });
  return (
    <div>
      <Stack
        direction={isDesktop ? "row" : "column"}
        sx={
          isDesktop ? { ...container } : { ...container, alignItems: "center" }
        }
        spacing={10}
      >
        <Box>
          <ScrollAnimation
            animateIn={"fadeInLeft"}
            duration={0.5}
            delay={100}
            animateOnce={true}
          >
            <Box position={"relative"}>
              <Box
                sx={
                  isMobile
                    ? {
                        ...educationBackdrop,
                        "&::before": {
                          ...educationBox,
                        },
                      }
                    : isVeryTiny
                    ? {
                        ...educationBackdrop,
                        width: "22rem",
                        height: "8rem",
                        "&::before": {
                          ...educationBox,
                          width: "22rem",
                          height: "8rem",
                        },
                      }
                    : {
                        ...educationBackdrop,
                        width: "16rem",
                        height: "6.5rem",
                        "&::before": {
                          ...educationBox,
                          width: "16rem",
                          height: "6.5rem",
                        },
                      }
                }
              >
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? { ...titleStyle }
                      : isVeryTiny
                      ? { ...titleStyle, fontSize: "24px" }
                      : {
                          ...titleStyle,
                          fontSize: "18px",
                          width: "11rem",
                        }
                  }
                >
                  Tampere University of Applied Sciences
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? { ...subtitleStyle, top: "6.5rem" }
                      : isVeryTiny
                      ? { ...subtitleStyle, top: "6rem", fontSize: "20px" }
                      : { ...subtitleStyle, top: "5rem", fontSize: "15px" }
                  }
                >
                  Software Development
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? { ...subtitleStyle, top: "9rem" }
                      : isVeryTiny
                      ? { ...subtitleStyle, top: "8rem", fontSize: "20px" }
                      : { ...subtitleStyle, top: "7rem", fontSize: "15px" }
                  }
                >
                  2022-2025
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? {
                          ...subtitleStyle,
                          top: "9rem",
                          left: "11rem",
                          color: "#E2FFA6",
                        }
                      : isVeryTiny
                      ? {
                          ...subtitleStyle,
                          top: "8rem",
                          left: "11rem",
                          fontSize: "20px",
                          color: "#E2FFA6",
                        }
                      : {
                          ...subtitleStyle,
                          top: "7rem",
                          left: "9rem",
                          fontSize: "15px",
                          color: "#E2FFA6",
                        }
                  }
                >
                  Ongoing
                </Typography>
                <img
                  src="images/Logos/tamk.png"
                  alt="tamk-logo"
                  style={
                    isMobile
                      ? { ...imageStyle }
                      : isVeryTiny
                      ? { ...imageStyle, height: "7rem" }
                      : { ...imageStyle, height: "5.5rem" }
                  }
                />
              </Box>
            </Box>
          </ScrollAnimation>
        </Box>
        <Box>
          <ScrollAnimation
            animateIn={"fadeInRight"}
            duration={0.5}
            delay={200}
            animateOnce={true}
          >
            <Box position={"relative"} top={isDesktop ? 0 : -45}>
              <Box
                sx={
                  isMobile
                    ? {
                        ...educationBackdrop,
                        "&::before": {
                          ...educationBox,
                        },
                      }
                    : isVeryTiny
                    ? {
                        ...educationBackdrop,
                        width: "22rem",
                        height: "8rem",
                        "&::before": {
                          ...educationBox,
                          width: "22rem",
                          height: "8rem",
                        },
                      }
                    : {
                        ...educationBackdrop,
                        width: "16rem",
                        height: "6.5rem",
                        "&::before": {
                          ...educationBox,
                          width: "16rem",
                          height: "6.5rem",
                        },
                      }
                }
              >
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? { ...titleStyle }
                      : isVeryTiny
                      ? { ...titleStyle, fontSize: "24px" }
                      : {
                          ...titleStyle,
                          fontSize: "18px",
                          width: "11rem",
                        }
                  }
                >
                  Finnish Matriculation Examination
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? { ...subtitleStyle, top: "6.5rem" }
                      : isVeryTiny
                      ? { ...subtitleStyle, top: "6rem", fontSize: "20px" }
                      : { ...subtitleStyle, top: "5rem", fontSize: "15px" }
                  }
                >
                  College Degree
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? { ...subtitleStyle, top: "9rem" }
                      : isVeryTiny
                      ? { ...subtitleStyle, top: "8rem", fontSize: "20px" }
                      : { ...subtitleStyle, top: "7rem", fontSize: "15px" }
                  }
                >
                  2019-2022
                </Typography>
                <Typography
                  variant={"h1"}
                  sx={
                    isMobile
                      ? {
                          ...subtitleStyle,
                          top: "9rem",
                          left: "11rem",
                        }
                      : isVeryTiny
                      ? {
                          ...subtitleStyle,
                          top: "8rem",
                          left: "11rem",
                          fontSize: "20px",
                        }
                      : {
                          ...subtitleStyle,
                          top: "7rem",
                          left: "9rem",
                          fontSize: "15px",
                        }
                  }
                >
                  Completed
                </Typography>
                <img
                  src="images/Logos/ylioppilas.png"
                  alt="tamk-logo"
                  style={
                    isMobile
                      ? { ...imageStyle }
                      : isVeryTiny
                      ? { ...imageStyle, height: "7rem" }
                      : { ...imageStyle, height: "5.5rem", right: "-0.5rem" }
                  }
                />
              </Box>
            </Box>
          </ScrollAnimation>
        </Box>
      </Stack>
    </div>
  );
}
