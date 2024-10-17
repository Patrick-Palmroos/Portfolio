import { Box, Stack, Typography } from "@mui/material";
import {
  container,
  educationBox,
  educationBackdrop,
  imageStyle,
} from "./EducationStyle";

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
            <Typography zIndex={3} position={"absolute"}>
              HELLO
            </Typography>
            <img
              src="images/Logos/tamk.png"
              alt="tamk-logo"
              style={imageStyle}
            />
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
            <Typography zIndex={3} position={"absolute"}>
              HELLO
            </Typography>
            <img
              src="images/Logos/ylioppilas.png"
              alt="tamk-logo"
              style={imageStyle}
            />
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
