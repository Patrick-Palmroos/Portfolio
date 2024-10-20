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

export default function Header() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  return (
    <div>
      <Stack component={"section"} paddingTop={"8rem"} alignItems={"center"}>
        {/*The box component. */}
        <Box
          display={"flex"}
          justifyContent={isDesktop ? "space-around" : "center"}
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
                  width: "90%",
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
                : {
                    ...titleBox,
                    left: "0rem",
                    marginTop: "-15rem",
                    paddingRight: "0rem",
                    width: "70%",
                    height: "18vw",
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
                    : {
                        fontSize: "4.5vw",
                        color: "primary.main",
                      }
                }
                flexDirection={"row"}
              >
                Hi! My name is
              </Typography>
              <Typography
                variant={"h1"}
                sx={
                  isDesktop
                    ? {
                        fontSize: "5vw",
                        color: "primary.contrastText",
                      }
                    : {
                        fontSize: "6.5vw",
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
                    : {
                        fontSize: "5.5vw",
                      }
                }
              >
                Software Developer
              </Typography>
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
                      left: "-21rem",
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
