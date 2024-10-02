import {
  backgroundBox,
  circle,
  pfpStyle,
  logoStyle,
  titleBox,
} from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";
import pfp from "../../assets/me.png";
import logos from "../../assets/logos.png";

export default function Header() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"3rem"} alignItems={"center"}>
        {/*The box component. */}
        <Box
          alignItems={"center"}
          sx={{
            ...backgroundBox,
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(-110deg, #e8cde500 36%, #B985FC)",
              zIndex: -1,
            },
          }}
        >
          <Stack sx={titleBox} spacing={-1}>
            <Typography
              variant={"h1"}
              sx={{ fontSize: "36px", color: "primary.main" }}
            >
              Hi! My name is
            </Typography>
            <Typography
              variant={"h1"}
              sx={{ fontSize: "75px", color: "primary.contrastText" }}
            >
              Patrick Palmroos
            </Typography>
            <Typography variant={"h1"} sx={{ fontSize: "60px" }}>
              Software Developer
            </Typography>
          </Stack>

          {/*logos */}
          <img src={logos} alt="Logos" style={logoStyle} />
          {/*circle behind profile picture */}
          <Box sx={circle} />
          {/*Profile Picture */}
          <img src={pfp} alt="Picture of Patrick Palmroos" style={pfpStyle} />
        </Box>
      </Stack>
    </div>
  );
}
