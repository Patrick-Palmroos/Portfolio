import { Box, Stack } from "@mui/material";
import workJson from "../util/work.json";
import WorkButton from "../util/WorkButton/WorkButton";

export default function WorkExperience() {
  const work = workJson.work;

  return (
    <div>
      <Box>
        <Stack direction="row">
          <Stack>
            {work.map((work) => (
              <WorkButton width={5} height={5} work={work} key={work.id} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
