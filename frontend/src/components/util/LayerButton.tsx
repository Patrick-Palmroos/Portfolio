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
            fontFamily: "Lilita One",
            color: "primary.main",
            "&:hover": {
              color: "common.white",
              backgroundColor: "color(srgb 0.73 0.52 0.99 / 0.50)",
              transition: "1s ease",
            },
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              left: "0rem",
              top: "0rem",
              width: "100%",
              height: "100%",
              borderRadius: "4px",
              opacity: 0,
            },
            "&::before": {
              backgroundColor: "color(srgb 0.73 0.52 0.99 / 0.50)",
              zIndex: 1,
              transition: "opacity 0.5s ease, transform 0.6s ease",
            },
            "&::after": {
              backgroundImage:
                "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
              zIndex: 2,
              transition: "opacity 1s ease, transform 0.8s ease",
            },
            "&:hover::before": {
              opacity: 1,
              transform: "translateY(-0.5rem)",
              transition: "opacity 0.8s ease, transform 0.2s ease",
            },
            "&:hover::after": {
              opacity: 1,
              transform: "translateY(-1rem)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            },
            "&:hover .text": {
              transform: "translateY(-1rem)",
              transition: "transform 0.4s ease, color 0.1s ease",
            },
          }}
        >
          <Typography
            className="text"
            sx={{
              fontSize: "30px",
              zIndex: 3,
              position: "relative",
              transform: "translateY(0)",
              transition: "transform 0.8s ease, color 0.2s ease",
            }}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}
