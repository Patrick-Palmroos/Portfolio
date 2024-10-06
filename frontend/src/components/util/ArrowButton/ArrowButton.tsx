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
          background: "green",
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
            top: "1.2rem",
            left: "0.3rem",
            height: "0.6rem",
            width: "4rem",
            rotate: "45deg",
          },

          "&::after": {
            top: "2rem",
            left: "2rem",
            height: "4rem",
            width: "0.6rem",
            rotate: "45deg",
          },
        }}
      ></Box>
    </div>
  );
}
