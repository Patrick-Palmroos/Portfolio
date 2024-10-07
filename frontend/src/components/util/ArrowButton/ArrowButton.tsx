import { Stack, Typography, Box } from "@mui/material";

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
            background: "red",
            borderRadius: "0.6rem",
            left: "-5%",
            display: "block",
          },

          "&::before": {
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
            top: "1.95rem",
            left: "2rem",
            height: "4rem",
            width: "0.6rem",
            rotate: "35deg",
            transform: "translateX(-0rem) translateY(0.25rem)",
            transition: "0.2s ease",
            zIndex: 2,
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
            background: "red",
            transition: "0.2s ease",
          },
        }}
      >
        <Box
          className={"anim"}
          sx={{
            position: "absolute",
            background: "red",
            height: "0.5rem",
            width: "0.1rem",
            right: "1.5rem",
            top: "2.5rem",
            borderRadius: "0.6rem",
            transition: "0.2s ease",
            zIndex: 5,
          }}
        />
      </Box>
    </div>
  );
}
