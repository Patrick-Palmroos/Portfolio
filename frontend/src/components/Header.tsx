import { test, backgroundBox, circle } from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"3rem"} alignItems={"center"}>
        <Box alignItems={"center"} sx={backgroundBox}>
          <Typography variant={"h1"} sx={test}>
            Helloooo
          </Typography>
          <Box sx={circle} />
        </Box>
      </Stack>
    </div>
  );
}
