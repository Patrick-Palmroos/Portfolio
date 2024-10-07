import { Stack, Typography, Box } from "@mui/material";
import { titleStyle, lineStyle } from "./TitleStyle";

export default function Title({
  title,
  line = true,
}: {
  title: string;
  line?: boolean;
}) {
  return (
    <div>
      <Stack direction={"row"} paddingTop={10} alignItems={"center"}>
        <Typography variant="h1" sx={titleStyle}>
          {title}
        </Typography>
        {line ? <Box sx={lineStyle} /> : null}
      </Stack>
    </div>
  );
}
