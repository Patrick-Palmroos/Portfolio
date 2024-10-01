import { test, backgroundBox } from "./HeaderStyle";
import { Stack, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"3rem"}>
        <Box
          alignItems={"center"}
          sx={{
            ...backgroundBox,
            "&::before": {
              content: '""',
              position: "absolute",
              left: "1.2rem",
              top: "1rem",
              width: "100%",
              height: "100%",
              backgroundColor: "blue",
              zIndex: -1,
            },
          }}
        >
          <Typography variant={"h1"} sx={test}>
            Helloooo
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}
