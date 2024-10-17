import { Box, Typography } from "@mui/material";
import { projectTabStyle, exitButtonStyle } from "./ProjectTabStyle";
import { Project } from "../Interfaces";

export default function ProjectTab({
  callback,
  project,
}: {
  callback: () => void;
  project: Project;
}) {
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
        <Typography variant="h1">{project.name}</Typography>
      </Box>
    </div>
  );
}
