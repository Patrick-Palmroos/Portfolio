import { Box } from "@mui/material";
import { projectTabStyle, exitButtonStyle } from "./ProjectTabStyle";

export default function ProjectTab({ callback }: { callback: () => void }) {
  return (
    <div>
      <Box
        sx={{
          ...projectTabStyle,
        }}
      >
        <Box
          component={"button"}
          onClick={callback}
          sx={{
            ...exitButtonStyle,

            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: "0.5rem",
              height: "3rem",
              top: "1rem",
              left: "2.25rem",
              borderRadius: "20px",
              backgroundColor: "white",
              zIndex: 2,
            },

            "&::before": {
              rotate: "-45deg",
            },

            "&::after": {
              rotate: "45deg",
            },
          }}
        />
      </Box>
    </div>
  );
}
