import {
  test,
  backgroundBox,
  circle,
  pfpStyle,
  logoStyle,
} from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";
import pfp from "../assets/me.png";
import logos from "../assets/logos.png";

export default function Header() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"3rem"} alignItems={"center"}>
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
          <Typography variant={"h1"} sx={test}>
            Helloooo
          </Typography>
          <img src={logos} alt="Logos" style={logoStyle} />
          <Box sx={circle} />
          <img src={pfp} alt="Picture of Patrick Palmroos" style={pfpStyle} />
        </Box>
      </Stack>
    </div>
  );
}
