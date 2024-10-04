import Project from "../ProjectInterface";
import { Stack, Typography, Box } from "@mui/material";
import { projectBoxStyle } from "./ProjectBoxStyle";

export default function ProjectBox({ project }: { project: Project }) {
  return (
    <div>
      <Stack direction={"column"} sx={projectBoxStyle}>
        <Typography>{project.name}</Typography>
        <Typography>{project.subtitle}</Typography>
      </Stack>
    </div>
  );
}
