import { Box, Typography, Stack, Slide } from "@mui/material";
import {
  projectTabStyle,
  exitButtonStyle,
  imageStyle,
  textStyle,
  titleStyle,
  dateTextStyle,
  iconStyle,
} from "./ProjectTabStyle";
import { Project } from "../Interfaces";
import { useMediaQuery } from "react-responsive";

export default function ProjectTab({
  callback,
  project,
}: {
  callback: () => void;
  project: Project;
}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1050px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 750px)" });
  return (
    <div>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Box
          sx={
            isDesktop
              ? {
                  ...projectTabStyle,
                }
              : isMobile
              ? {
                  ...projectTabStyle,
                  width: "70%",
                  left: "14%",
                }
              : {
                  ...projectTabStyle,
                  width: "80%",
                  left: "8%",
                }
          }
        >
          <Box
            component={"button"}
            onClick={callback}
            sx={{
              ...exitButtonStyle,

              "&::before, &::after": {
                content: '""',
                position: "absolute",
                width: "0.5rem",
                height: "3rem",
                top: "1rem",
                left: "2.25rem",
                borderRadius: "20px",
                backgroundColor: "white",
                zIndex: 2,
                transition: "0.2s ease",
              },

              "&::before": {
                rotate: "-45deg",
              },

              "&::after": {
                rotate: "45deg",
              },

              ":hover::after": {
                rotate: "55deg",
                transition: "0.2s ease",
              },

              ":hover::before": {
                rotate: "-55deg",
                transition: "0.2s ease",
              },
            }}
          />
          <Box
            sx={{
              overflowX: "hidden",
              overflowY: "scroll",
              maxHeight: "100%",
              maxWidth: "100%",
              backgroundImage: `url(${project.backDrop})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              zIndex: 2,

              "&::before": {
                display: "transparent",
                content: '""',
                position: "absolute",
                width: "calc(100% - 1rem)",
                height: "100%",
                borderRadius: "10px",
                background:
                  "linear-gradient(110deg, rgba(0, 0, 0, 0.8) 0%, transparent)",
                zIndex: 0,
              },

              "&::-webkit-scrollbar": {
                width: "1rem",
                backgroundColor: "#19121c",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#19121c",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#B985FC",
                border: "3px solid white",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#5a1a92",
              },
            }}
          >
            <Stack
              direction={isMobile ? "row" : "column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              sx={
                isMobile
                  ? {
                      padding: "2rem 0rem 3rem 0rem",
                    }
                  : {
                      padding: "3rem 0rem 1rem 0rem",
                    }
              }
            >
              <Stack>
                <Stack
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography
                    variant="h1"
                    sx={
                      isDesktop
                        ? { ...titleStyle }
                        : isMobile
                        ? {
                            ...titleStyle,
                            paddingLeft: "1rem",
                            fontSize: "33px",
                          }
                        : {
                            ...titleStyle,
                            paddingLeft: "0.7rem",
                            fontSize: "30px",
                          }
                    }
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={
                      isDesktop
                        ? {
                            paddingLeft: "0.5rem",
                            paddingTop: "0.5rem",
                            color: "white",
                            zIndex: 1,
                          }
                        : {
                            paddingLeft: "0.3rem",
                            paddingTop: "0.3rem",
                            fontSize: "23px",
                            color: "white",
                            zIndex: 1,
                          }
                    }
                  >
                    {""} - {project.employer}
                  </Typography>
                </Stack>
                <Typography
                  variant="h2"
                  sx={
                    isDesktop
                      ? { ...dateTextStyle }
                      : isMobile
                      ? {
                          ...dateTextStyle,
                          fontSize: "24px",
                          paddingLeft: "1rem",
                        }
                      : {
                          ...dateTextStyle,
                          fontSize: "21px",
                          paddingLeft: "1.5rem",
                        }
                  }
                >
                  {project.duration}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                paddingLeft={isMobile ? "1rem" : "1.5rem"}
                paddingBottom={"0.3rem"}
              >
                {project.logos.map((value, index) => (
                  <img
                    key={index}
                    src={value}
                    alt={`logo ${index}`}
                    style={
                      isDesktop
                        ? { ...iconStyle }
                        : isMobile
                        ? { ...iconStyle, height: "3.5rem" }
                        : { ...iconStyle, height: "3rem" }
                    }
                    className="image"
                  />
                ))}
              </Stack>
            </Stack>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              sx={{
                position: "relative",
                width: "100%",
                background: "#27242E",
                zIndex: 3,
              }}
            >
              <Stack
                direction={"column"}
                marginTop={"1rem"}
                alignItems={"center"}
              >
                {project.details.split("\n").map((line, index) => (
                  <Stack
                    direction={index % 2 === 0 ? "row" : "row-reverse"}
                    sx={
                      isDesktop
                        ? { width: "85%" }
                        : isMobile
                        ? {
                            width: "64vw",
                            marginLeft: "1rem",
                          }
                        : {
                            width: "90%",
                            marginLeft: "0rem",
                          }
                    }
                    justifyContent={"center"}
                    alignItems={"center"}
                    key={index}
                  >
                    <img
                      src={project.images[index]}
                      alt="picture of software"
                      style={
                        isDesktop
                          ? { ...imageStyle }
                          : isMobile
                          ? {
                              ...imageStyle,
                              width: "13vw",
                              margin: "0rem 0rem 0rem 0rem",
                            }
                          : {
                              ...imageStyle,
                              width: "15vw",
                              margin: "0rem 0rem 0rem 0rem",
                              padding: "2rem 0rem 1rem 0rem",
                            }
                      }
                      className="image"
                    />

                    <Typography
                      key={index}
                      variant="h2"
                      sx={
                        isDesktop
                          ? {
                              ...textStyle,
                            }
                          : isMobile
                          ? {
                              ...textStyle,
                              fontSize: "2.4vw",
                            }
                          : {
                              ...textStyle,
                              margin: "0rem 0.5rem 0rem 0.5rem",
                              width: "110%",
                              fontSize: "3vw",
                            }
                      }
                    >
                      {line}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Slide>
    </div>
  );
}
