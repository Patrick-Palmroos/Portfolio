import {
  backgroundBox,
  circle,
  pfpStyle,
  logoStyle,
  titleBox,
} from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";
import pfp from "../assets/me.png";
import logos from "../assets/logos.png";

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
                "linear-gradient(-110deg, #e8cde500 17%, #B985FC)",
              zIndex: -1,
            },
          }}
        >
          <Box sx={titleBox}>
            <Typography variant={"h1"} sx={{}}>
              Helloooo
            </Typography>
            <Typography variant={"h1"} sx={{}}>
              Patrick Palmroos
            </Typography>
            <Typography variant={"h1"} sx={{}}>
              Helloooo
            </Typography>
          </Box>

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
