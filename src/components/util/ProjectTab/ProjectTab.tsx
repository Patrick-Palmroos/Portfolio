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
import { useLanguage } from "../languageContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectTab({
  callback,
  project,
}: {
  callback: () => void;
  project: Project;
}) {
  const { language } = useLanguage();
  const isDesktop = useMediaQuery({ query: "(min-width: 1050px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 750px)" });
  const isTiny = useMediaQuery({ query: "(min-width: 520px)" });
  const details = language === "en" ? project.detailsEn : project.detailsFi;
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
              : isTiny
              ? {
                  ...projectTabStyle,
                  width: "80%",
                  left: "8%",
                }
              : {
                  ...projectTabStyle,
                  width: "94%",
                  left: "0.8%",
                }
          }
        >
          <Box
            component={"button"}
            onClick={callback}
            sx={{
              ...exitButtonStyle,
              right: isTiny ? "-2rem" : "-0.6rem",
              top: isTiny ? "-2rem" : "-1.2rem",
              width: isTiny ? "5rem" : "4rem",
              height: isTiny ? "5rem" : "4rem",

              "&::before, &::after": {
                content: '""',
                position: "absolute",
                width: isTiny ? "0.5rem" : "0.4rem",
                height: isTiny ? "3rem" : "2.6rem",
                top: isTiny ? "1rem" : "0.7rem",
                left: isTiny ? "2.25rem" : "1.8rem",
                borderRadius: "10px",
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
                  : isTiny
                  ? {
                      padding: "3rem 0rem 1rem 0rem",
                    }
                  : {
                      padding: "1rem 0rem 1rem 0rem",
                    }
              }
            >
              <Stack alignItems={isMobile ? "flex-start" : "center"}>
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
                            paddingLeft: "0rem",
                            fontSize: "33px",
                          }
                        : {
                            ...titleStyle,
                            paddingLeft: "0rem",
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
                          paddingLeft: "0rem",
                        }
                      : {
                          ...dateTextStyle,
                          fontSize: "21px",
                          paddingLeft: "0rem",
                        }
                  }
                >
                  {language === "en" ? project.durationEn : project.durationFi}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                paddingLeft={isMobile ? "1rem" : "1rem"}
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
                paddingBottom: "2rem",
                background: "#27242E",
                zIndex: 3,
              }}
            >
              {isTiny ? (
                <Stack
                  direction={"column"}
                  marginTop={"1rem"}
                  alignItems={"center"}
                >
                  {details.split("\n").map((line, index) => (
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
                          project.mobileImages
                            ? isDesktop
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
                            : isDesktop
                            ? {
                                ...imageStyle,
                                width: "15vw",
                                padding: "1rem 0rem 0rem 0rem",
                              }
                            : isMobile
                            ? {
                                ...imageStyle,
                                width: "15vw",
                                padding: "1rem 0rem 0rem 1rem",
                                margin: "0rem 0rem 0rem 0rem",
                              }
                            : {
                                ...imageStyle,
                                width: "22vw",
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
              ) : (
                //mobile tiny
                <Stack
                  direction={"column"}
                  marginTop={"1rem"}
                  alignItems={"center"}
                >
                  <Box
                    sx={{
                      ".carousel": {
                        height: "15rem",
                        marginBottom: "-4rem",
                        marginLeft: "0rem",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                      },
                      ".carousel .thumb": {
                        height: "4rem",
                        width: "4rem",
                        overflow: "hidden",
                        background: "#a049c04d",
                        border: "2px solid #7c3773",
                        borderRadius: "10px",
                      },
                      ".carousel .thumb.selected": {
                        border: "2px solid white",
                        background: "#792c83",
                      },

                      ".carousel .thumb:hover": {
                        border: "2px solid white",
                        opacity: 0.8,
                      },

                      ".carousel .thumbs": {
                        marginLeft: "-2rem",
                      },

                      ".carousel .thumb img": {
                        top: project.mobileImages ? "0rem" : "4.1rem",
                        left: project.mobileImages ? "0.4rem" : "-0.25rem",
                        transform: project.mobileImages
                          ? "scale(1.7)"
                          : "scale(1.3)",
                        height: "5rem !important",
                        width: "auto !important",
                        objectFit: "cover",
                      },
                    }}
                  >
                    <Carousel
                      width={"90vw"}
                      thumbWidth={70}
                      className="carousel"
                      infiniteLoop={true}
                      showStatus={false}
                    >
                      <div>
                        <img
                          src={project.images[0]}
                          alt="picture of software"
                          style={{
                            ...imageStyle,
                            width: project.mobileImages ? "8rem" : "16rem",
                            height: "auto",
                            marginLeft: "1rem",
                            margin: project.mobileImages
                              ? "-1.5rem 0rem 0rem 1.5rem"
                              : "-4rem -1rem 0rem 0rem",
                            padding: project.mobileImages
                              ? "2rem 0rem 1rem 0rem"
                              : "0rem 0rem 1rem 0rem",
                          }}
                        />
                      </div>
                      <div>
                        <img
                          src={project.images[1]}
                          alt="picture of software"
                          style={{
                            ...imageStyle,
                            width: project.mobileImages ? "8rem" : "16rem",
                            height: "auto",
                            marginLeft: "1rem",
                            margin: project.mobileImages
                              ? "-1.5rem 0rem 0rem 1.5rem"
                              : "-4rem -1rem 0rem 0rem",
                            padding: project.mobileImages
                              ? "2rem 0rem 1rem 0rem"
                              : "0rem 0rem 1rem 0rem",
                          }}
                        />
                      </div>
                      <div>
                        <img
                          src={project.images[2]}
                          alt="picture of software"
                          style={{
                            ...imageStyle,
                            width: project.mobileImages ? "8rem" : "16rem",
                            height: "auto",
                            marginLeft: "1rem",
                            margin: project.mobileImages
                              ? "-1.5rem 0rem 0rem 1.5rem"
                              : "-4rem -1rem 0rem 0rem",
                            padding: project.mobileImages
                              ? "2rem 0rem 1rem 0rem"
                              : "0rem 0rem 1rem 0rem",
                          }}
                        />
                      </div>
                    </Carousel>
                  </Box>
                  <Box paddingTop={"12rem"}>
                    {details.split("\n").map((line, index) => (
                      <Stack
                        direction={index % 2 === 0 ? "row" : "row-reverse"}
                        sx={{
                          padding: "0.2rem",
                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        key={index}
                      >
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
                                  margin: "0.7rem 0.5rem 0rem 0.5rem",
                                  width: "110%",
                                  fontSize: "4.5vw",
                                }
                          }
                        >
                          {line}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>
                </Stack>
              )}
            </Stack>
          </Box>
        </Box>
      </Slide>
    </div>
  );
}
