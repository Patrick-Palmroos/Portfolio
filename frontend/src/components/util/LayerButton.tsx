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
        <Box
          component={"a"}
          href={link}
          sx={{
            ...buttonStyle,
            "&:hover": {
              backgroundColor: "blue",
            },
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              left: "0px",
              top: "0px",
              width: "100%",
              height: "100%",
              backgroundColor: "green",
            },
            "&::before": {
              backgroundColor: "green",
              zIndex: 1,
            },
            "&::after": {
              backgroundColor: "yellow",
              zIndex: 2,
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "30px", zIndex: 3, position: "relative" }}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}
