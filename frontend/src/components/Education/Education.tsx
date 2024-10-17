import { Box, Stack, Typography } from "@mui/material";
import {
  container,
  educationBox,
  educationBackdrop,
  imageStyle,
  titleStyle,
  subtitleStyle,
} from "./EducationStyle";

export default function Education() {
  return (
    <div>
      <Stack direction={"row"} sx={container} spacing={10}>
        <Box position={"relative"}>
          <Box
            sx={{
              ...educationBackdrop,
              "&::before": {
                ...educationBox,
              },
            }}
          >
            <Typography variant={"h1"} sx={titleStyle}>
              Tampere University of Applied Sciences
            </Typography>
            <Typography variant={"h1"} sx={{ ...subtitleStyle, top: "6.5rem" }}>
              Software Development
            </Typography>
            <Typography variant={"h1"} sx={{ ...subtitleStyle, top: "9rem" }}>
              2022-2025
            </Typography>
            <Typography
              variant={"h1"}
              sx={{
                ...subtitleStyle,
                top: "9rem",
                left: "11rem",
                color: "#E2FFA6",
              }}
            >
              Ongoing
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
            <Typography variant={"h1"} sx={titleStyle}>
              Finnish Matriculation Examination
            </Typography>
            <Typography variant={"h1"} sx={{ ...subtitleStyle, top: "6.5rem" }}>
              College Degree
            </Typography>
            <Typography variant={"h1"} sx={{ ...subtitleStyle, top: "9rem" }}>
              2019-2022
            </Typography>
            <Typography
              variant={"h1"}
              sx={{
                ...subtitleStyle,
                top: "9rem",
                left: "11rem",
              }}
            >
              Completed
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
