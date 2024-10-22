import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import workJson from "../util/work.json";
import WorkButton from "../util/WorkButton/WorkButton";
import {
  detailBox,
  container,
  lineStyle,
  pointerLine,
  subLineStyle,
} from "./WorkExperienceStyle";
import { useMediaQuery } from "react-responsive";

export default function WorkExperience() {
  const isDesktop = useMediaQuery({ query: "(min-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 750px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 650px)" });
  const [activeWork, setActiveWork] = useState<number>(0);
  const workList = workJson.work;

  const HandleActiveWork = (workId: number) => {
    setActiveWork(workId);
  };

  return (
    <div>
      <Box>
        <Stack sx={container} paddingTop={isDesktop ? "0rem" : "15rem"}>
          <Stack
            spacing={1}
            sx={
              isDesktop
                ? null
                : isVeryTiny
                ? {
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "flex-end",
                    top: "-2rem",
                  }
                : {
                    position: "absolute",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "auto auto",
                    marginRight: "-1rem",
                    alignItems: "end",
                    top: "-3rem",
                    rowGap: "0.5rem",

                    ".grid-item:nth-child(3)": {
                      gridColumn: "1 / 3",
                      justifySelf: "center",
                    },
                  }
            }
          >
            {workList.map((work) => (
              <Stack
                paddingRight={isDesktop ? "5rem" : "1rem"}
                key={work.id}
                className="grid-item"
              >
                <WorkButton
                  width={isDesktop ? 20 : isMobile ? 14 : isVeryTiny ? 12 : 9}
                  height={isDesktop ? 7 : isMobile ? 7 : isVeryTiny ? 6 : 5}
                  work={work}
                  callback={() => HandleActiveWork(work.id)}
                  active={work.id == activeWork ? true : false}
                />
                {isDesktop && (
                  <Box
                    alignSelf={"center"}
                    sx={
                      work.id !== workList.length - 1
                        ? lineStyle
                        : { ...lineStyle, backgroundColor: "none" }
                    }
                  />
                )}

                <Box
                  sx={{
                    height: "100%",
                    marginRight: "3rem",
                    marginLeft: "3rem",
                    position: "relative",
                  }}
                >
                  {isDesktop && (
                    <Box
                      sx={(() => {
                        switch (work.id) {
                          //styling for first item
                          case 0:
                            return activeWork === work.id
                              ? {
                                  //active 0
                                  ...pointerLine,
                                  borderRadius: "10px",
                                  height: "0.3rem",
                                  paddingRight: "2rem",
                                  right: "-6rem",
                                  transition: "0.2s ease",

                                  "&::before": {
                                    ...subLineStyle,
                                    background:
                                      "linear-gradient(to bottom, #B985FC 20%, #C96BC5 80%)",
                                    borderRadius: "10px",
                                    transition: "0.2s 0.2s ease",
                                    right: "0rem",
                                    paddingTop: "12.2rem",
                                  },

                                  "&::after": {
                                    ...subLineStyle,
                                    background: "#C96BC5",
                                    borderRadius: "10px",
                                    transition:
                                      "right 0.2s 0.4s ease, top 0.2s 0.2s ease, width 0.2s 0.4s ease",
                                    right: "-1.7rem",
                                    top: "12.2rem",
                                    width: "2rem",
                                  },
                                }
                              : {
                                  //not active 0
                                  ...pointerLine,
                                  height: "0.3rem",
                                  paddingRight: "0rem",
                                  right: "-3rem",
                                  transition: "0.2s 0.4s ease",

                                  "&::before": {
                                    ...subLineStyle,
                                    background:
                                      "linear-gradient(to bottom, #B985FC 20%, #C96BC5 80%)",
                                    transition: "0.2s 0.2s ease",
                                    right: "0rem",
                                    paddingTop: "0rem",
                                  },

                                  "&::after": {
                                    ...subLineStyle,
                                    background: "#B985FC",
                                    transition:
                                      "right 0.2s ease, top 0.2s 0.2s ease, width 0.2s ease, background 0.1s 0.3s ease",
                                    right: "0rem",
                                    top: "0rem",
                                    paddingTop: "0rem",
                                  },
                                };

                          //styling for second item
                          case 1:
                            return activeWork === work.id
                              ? {
                                  //active 1
                                  ...pointerLine,
                                  background:
                                    "linear-gradient(to right, #B985FC 20%, #C96BC5 80%)",
                                  borderRadius: "10px",
                                  height: "0.3rem",
                                  width: "4rem",
                                  right: "-7.7rem",
                                  transition: "0.4s 0.4s ease",
                                }
                              : {
                                  //not active 1
                                  ...pointerLine,
                                  background:
                                    "linear-gradient(to right, #B985FC 0%, #C96BC5 100%)",
                                  borderRadius: "10px",
                                  height: "0.3rem",
                                  paddingRight: "0rem",
                                  right: "-3rem",
                                  transition: "0.4s ease",
                                };

                          case 2:
                            return activeWork === work.id
                              ? {
                                  //active 2
                                  ...pointerLine,
                                  borderRadius: "10px",
                                  height: "0.3rem",
                                  paddingRight: "2rem",
                                  right: "-6rem",
                                  transition: "0.2s ease-in",

                                  "&::before": {
                                    ...subLineStyle,
                                    background:
                                      "linear-gradient(to top, #B985FC 20%, #C96BC5 80%)",
                                    borderRadius: "10px",
                                    transition: "0.2s 0.2s ease",
                                    right: "0rem",
                                    paddingTop: "12.2rem",
                                    bottom: "0",
                                  },
                                  "&::after": {
                                    ...subLineStyle,
                                    borderRadius: "10px",
                                    background: "#C96BC5",
                                    transition:
                                      "bottom 0.2s 0.2s ease, right 0.2s 0.4s ease, width 0.2s 0.4s ease",
                                    right: "-1.7rem",
                                    bottom: "12.2rem",
                                    width: "2rem",
                                  },
                                }
                              : {
                                  //not active 2
                                  ...pointerLine,
                                  borderRadius: "10px",
                                  height: "0.3rem",
                                  paddingRight: "0rem",
                                  right: "-3rem",
                                  transition: "0.2s 0.4s ease",

                                  "&::before": {
                                    ...subLineStyle,
                                    background:
                                      "linear-gradient(to top, #B985FC 20%, #C96BC5 80%)",
                                    borderRadius: "10px",
                                    transition: "0.2s 0.2s ease",
                                    right: "0rem",
                                    paddingTop: "0rem",
                                    bottom: "0",
                                  },
                                  "&::after": {
                                    ...subLineStyle,
                                    background: "#B985FC",
                                    transition:
                                      "bottom 0.2s 0.2s ease, right 0.2s ease, width 0.2s ease, background 0.1s 0.3s ease",
                                    borderRadius: "10px",
                                    right: "0rem",
                                    bottom: "0rem",
                                    width: "0.3rem",
                                  },
                                };
                        }
                      })()}
                    ></Box>
                  )}
                </Box>
              </Stack>
            ))}
          </Stack>

          <Box
            sx={
              isDesktop
                ? { ...detailBox }
                : isMobile
                ? { ...detailBox, width: "39rem", height: "23rem" }
                : isVeryTiny
                ? {
                    ...detailBox,
                    width: "34rem",
                    height: "21rem",
                    marginTop: "-7rem",
                  }
                : {
                    ...detailBox,
                    maxWidth: "25rem",
                    marginRight: "1rem",
                    marginLeft: "1rem",
                    height: "auto",
                    marginTop: "-4rem",
                  }
            }
          >
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              {/*title and name */}
              <Stack>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: isMobile ? "35px" : isVeryTiny ? "30px" : "22px",
                    color: "primary.contrastText",
                  }}
                >
                  {workList[activeWork].name}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: isMobile ? "25px" : isVeryTiny ? "23px" : "18px",
                  }}
                >
                  {workList[activeWork].title}
                </Typography>
              </Stack>
              {/*work duration */}
              <Stack>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: isMobile ? "25px" : isVeryTiny ? "20px" : "15px",
                  }}
                >
                  {workList[activeWork].startDate} -{" "}
                  {workList[activeWork].endDate}
                </Typography>
              </Stack>
            </Stack>
            {workList[activeWork].description.split("\n").map((line, index) => (
              <Typography
                key={index}
                variant="h2"
                sx={{
                  fontSize: isDesktop
                    ? "20px"
                    : isMobile
                    ? "19px"
                    : isVeryTiny
                    ? "16px"
                    : "13px",
                }}
                paddingTop={"1.5rem"}
              >
                {line}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
