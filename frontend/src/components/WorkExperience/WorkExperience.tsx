import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import workJson from "../util/work.json";
import WorkButton from "../util/WorkButton/WorkButton";
import { detailBox, container } from "./WorkExperienceStyle";

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
          <Stack spacing={6}>
            {workList.map((work) => (
              <Stack>
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
                      ? {
                          backgroundColor: "red",
                          width: "0.5rem",
                          height: "2rem",
                        }
                      : null
                  }
                />
              </Stack>
            ))}
          </Stack>
          <Box
            sx={{
              height: "20rem",
              width: "0.5rem",
              backgroundColor: "green",
              margin: "1rem",
            }}
          />
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
