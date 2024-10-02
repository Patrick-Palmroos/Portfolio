import { Stack, Typography, Box } from "@mui/material";
import { buttonStyle } from "./LayerButtonStyle";

export default function LayerButton({ title }: { title: string }) {
  return (
    <div>
      <Stack sx={buttonStyle}>
        <a href="#">
          <Typography>{title}</Typography>
        </a>
      </Stack>
    </div>
  );
}
