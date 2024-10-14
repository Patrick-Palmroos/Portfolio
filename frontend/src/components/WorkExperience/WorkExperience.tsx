import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import workJson from "../util/work.json";
import WorkButton from "../util/WorkButton/WorkButton";
import { detailBox, container } from "./WorkExperienceStyle";

export default function WorkExperience() {
  const [work, setWork] = useState<number>(0);
  const workList = workJson.work;

  const activeWork = (workId: number) => {
    setWork(workId);
  };

  return (
    <div>
      <Box>
        <Stack sx={container}>
          <Stack>
            {workList.map((work) => (
              <WorkButton
                width={5}
                height={5}
                work={work}
                key={work.id}
                callback={() => activeWork(work.id)}
              />
            ))}
          </Stack>
          <Box sx={detailBox}>
            <Typography variant="h2">{workList[work].description}</Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
