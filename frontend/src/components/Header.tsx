import { test, backgroundBox } from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"20px"}>
        <Box alignItems={"center"} sx={backgroundBox}>
          <Typography variant={"h1"} sx={test}>
            Helloooo
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}
