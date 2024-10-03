import { Stack, Typography, Box } from "@mui/material";
import { titleStyle, lineStyle } from "./TitleStyle";

export const Title = () => {
  return (
    <div>
      <Stack direction={"row"} paddingTop={5} alignItems={"center"}>
        <Typography variant="h1" sx={titleStyle}>
          Hello!
        </Typography>
        <Box sx={lineStyle} />
      </Stack>
    </div>
  );
};
