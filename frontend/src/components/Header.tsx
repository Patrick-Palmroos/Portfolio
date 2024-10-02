import { test, backgroundBox, circle, pfpStyle } from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";
import Pfp from "../assets/me.png";

export default function Header() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"3rem"} alignItems={"center"}>
        <Box alignItems={"center"} sx={backgroundBox}>
          <Typography variant={"h1"} sx={test}>
            Helloooo
          </Typography>
          <Box sx={circle} />
          <img src={Pfp} alt="Picture of Patrick Palmroos" style={pfpStyle} />
        </Box>
      </Stack>
    </div>
  );
}
