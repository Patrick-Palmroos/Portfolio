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

export default function WorkExperience() {
  const [activeWork, setActiveWork] = useState<number>(0);
  const workList = workJson.work;

  const HandleActiveWork = (workId: number) => {
    setActiveWork(workId);
  };

  return (
    <div id="work">
      <Box>
        <Stack sx={container}>
          <Stack spacing={1}>
            {workList.map((work) => (
              <Stack paddingRight={"5rem"}>
                <WorkButton
                  width={20}
                  height={7}
                  work={work}
                  key={work.id}
                  callback={() => HandleActiveWork(work.id)}
                  active={work.id == activeWork ? true : false}
                />
                <Box
                  alignSelf={"center"}
                  sx={
                    work.id !== workList.length - 1
                      ? lineStyle
                      : { ...lineStyle, backgroundColor: "none" }
                  }
                />

                <Box
                  sx={{
                    height: "100%",
                    marginRight: "3rem",
                    marginLeft: "3rem",
                    position: "relative",
                  }}
                >
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
                                  borderRadius: "10px",
                                  transition: "0.2s 0.2s ease",
                                  right: "0rem",
                                  paddingTop: "12.2rem",
                                },

                                "&::after": {
                                  ...subLineStyle,
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
                                  transition: "0.2s 0.2s ease",
                                  right: "0rem",
                                  paddingTop: "0rem",
                                },

                                "&::after": {
                                  ...subLineStyle,
                                  transition:
                                    "right 0.2s ease, top 0.2s 0.2s ease, width 0.2s ease",
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
                                borderRadius: "10px",
                                height: "0.3rem",
                                width: "4rem",
                                right: "-7.7rem",
                                transition: "0.4s 0.4s ease",
                              }
                            : {
                                //not active 1
                                ...pointerLine,
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
                                  borderRadius: "10px",
                                  transition: "0.2s 0.2s ease",
                                  right: "0rem",
                                  paddingTop: "12.2rem",
                                  bottom: "0",
                                },
                                "&::after": {
                                  ...subLineStyle,
                                  borderRadius: "10px",
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
                                  borderRadius: "10px",
                                  transition: "0.2s 0.2s ease",
                                  right: "0rem",
                                  paddingTop: "0rem",
                                  bottom: "0",
                                },
                                "&::after": {
                                  ...subLineStyle,
                                  transition:
                                    "bottom 0.2s 0.2s ease, right 0.2s ease, width 0.2s ease",
                                  borderRadius: "10px",
                                  right: "0rem",
                                  bottom: "0rem",
                                  width: "0.3rem",
                                },
                              };
                      }
                    })()}
                  ></Box>
                </Box>
              </Stack>
            ))}
          </Stack>

          <Box sx={detailBox}>
            <Typography variant="h2">
              {workList[activeWork].description}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
