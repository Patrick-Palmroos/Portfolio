import { Stack, Typography, Box } from "@mui/material";

export const Title = () => {
  return (
    <div>
      <Stack direction={"row"} paddingTop={5}>
        <Typography variant="h1">Hello!</Typography>
        <Box />
      </Stack>
    </div>
  );
};
