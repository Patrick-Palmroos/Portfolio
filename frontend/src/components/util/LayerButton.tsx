import { Stack, Typography, Box } from "@mui/material";
import { buttonStyle } from "./LayerButtonStyle";

export default function LayerButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div>
      <Stack>
        <a href={link} style={buttonStyle}>
          <Typography
            variant="h1"
            sx={{ fontSize: "30px" }}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </a>
      </Stack>
    </div>
  );
}
