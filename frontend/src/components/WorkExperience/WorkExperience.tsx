import { Box, Stack } from "@mui/material";
import workJson from "../util/work.json";

export default function WorkExperience() {
  const work = workJson.work;

  return (
    <div>
      <Box>
        <Stack direction="row">
          <Stack>
            {work.map((work) => (
              <h1>{work.name}</h1>
            ))}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
