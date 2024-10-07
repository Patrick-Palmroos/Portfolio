import { Box } from "@mui/material";

export default function ArrowButton({ callback }: { callback: () => void }) {
  return (
    <div>
      <Box
        component={"button"}
        onClick={callback}
        sx={{
          width: "4.5rem",
          height: "5.5rem",
          boxSizing: "inline-block",
          position: "relative",
          border: "none",
          background: "none",
          cursor: "pointer",

          "&::before, &::after": {
            content: '""',
            position: "absolute",
            borderRadius: "0.6rem",
            left: "-5%",
            display: "block",
          },

          "&::before": {
            background: "linear-gradient(90deg, #998CFC 10%, #BB85FA)",
            top: "1.25rem",
            left: "0.3rem",
            height: "0.6rem",
            width: "4rem",
            rotate: "55deg",
            transform: "translateX(-0.3rem) translateY(0rem)",
            transition: "0.2s ease",
            zIndex: 2,
          },

          "&::after": {
            background: "linear-gradient(0deg, #998CFC 10%, #BB85FA)",
            top: "1.95rem",
            left: "2rem",
            height: "4rem",
            width: "0.6rem",
            rotate: "35deg",
            transform: "translateX(-0rem) translateY(0.25rem)",
            transition: "0.2s ease",
            zIndex: 3,
          },

          "&:hover::after": {
            rotate: "45deg",
            transform: "translateX(0rem) translateY(0rem)",
            transition: "0.2s ease",
          },
          "&:hover::before": {
            rotate: "45deg",
            transform: "translateX(0rem) translateY(0rem)",
            transition: "0.2s ease",
          },

          "&:hover .anim": {
            width: "3rem",
            right: "2.5rem",
            top: "2.5rem",
            background: "#BB85FA",
            transition: "0.2s ease",
          },
          "&:hover .circle": {
            backgroundColor: "color(srgb 0 0 0 / 0.20)",
            transition: "0.2s ease",
          },
        }}
      >
        <Box
          className={"circle"}
          sx={{
            position: "absolute",
            backgroundColor: "none",
            width: "6rem",
            height: "6rem",
            top: "-0.3em",
            borderRadius: "50%",
            left: "-1.5rem",
            zIndex: 1,
          }}
        />
        <Box
          className={"anim"}
          sx={{
            position: "absolute",
            background: "#BB85FA",
            height: "0.5rem",
            width: "0.1rem",
            right: "1.5rem",
            top: "2.5rem",
            borderRadius: "0.6rem",
            transition: "0.2s ease",
            zIndex: 2,
          }}
        />
      </Box>
    </div>
  );
}
