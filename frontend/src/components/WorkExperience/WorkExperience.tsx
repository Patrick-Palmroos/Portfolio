import { useState } from "react";
import { Box, Stack } from "@mui/material";
import workJson from "../util/work.json";
import WorkButton from "../util/WorkButton/WorkButton";

export default function WorkExperience() {
  const [work, setWork] = useState<number>(0);
  const workList = workJson.work;

  const activeWork = () => {};

  return (
    <div>
      <Box>
        <Stack direction="row">
          <Stack>
            {workList.map((work) => (
              <WorkButton
                width={5}
                height={5}
                work={work}
                key={work.id}
                callback={activeWork}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
