import { Box } from "@mui/material";

export default function SocialBox({
  icon,
  color1,
  color2,
  link,
}: {
  icon: string;
  color1: string;
  color2: string;
  link: string;
}) {
  return (
    <div>
      <Box
        component={"a"}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            background: `rgba(${color2}, 0.25)`,
            padding: "1rem",
            width: "3rem",
            height: "3rem",

            "&::before, &::after": {
              content: '""',
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              left: "0rem",
              top: "0rem",
              position: "absolute",
            },

            "&::before": {
              transition: "0.3s ease",
              background: `rgba(${color2}, 0.25)`,
            },

            "&::after": {
              transition: "0.3s ease",
              zIndex: 3,
              background: `linear-gradient(to top right, rgba(${color1}, 1), rgba(${color2}, 1))`,
            },

            "&:hover::before": {
              top: "-0.5rem",
            },

            "&:hover::after": {
              top: "-1rem",
            },

            "&:hover #icon": {
              transform: "translateY(-1rem)",
            },
          }}
        >
          <img
            src={icon}
            alt="icon"
            id="icon"
            style={{
              transition: "0.3s ease",
              position: "absolute",
              width: "3rem",
              height: "3rem",
              filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5))",
              zIndex: 4,
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
