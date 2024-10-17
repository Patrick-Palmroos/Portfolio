import { Box, Stack, Typography } from "@mui/material";
import { container, educationBox, educationBackdrop } from "./EducationStyle";

export default function Education() {
  return (
    <div>
      <Stack direction={"row"} sx={container} spacing={6}>
        <Box position={"relative"}>
          <Box
            sx={{
              ...educationBackdrop,
              "&::before": {
                ...educationBox,
              },
            }}
          >
            <Typography zIndex={3} position={"relative"}>
              HELLO
            </Typography>
          </Box>
        </Box>
        <Box position={"relative"}>
          <Box
            sx={{
              ...educationBackdrop,
              "&::before": {
                ...educationBox,
              },
            }}
          >
            HELLLOOOOOO
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
