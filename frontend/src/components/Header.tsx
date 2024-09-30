import { test } from "./HeaderStyle";
import { Container, Stack, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <div style={{ margin: "0px" }}>
      <Container component={"section"}>
        <Box alignItems={"center"}>
          <Typography sx={test}>Helloooo</Typography>
        </Box>
      </Container>
    </div>
  );
}
