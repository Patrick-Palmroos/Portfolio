import Project from "../ProjectInterface";
import { Stack, Typography, Box } from "@mui/material";

export default function ProjectBox({ project }: { project: Project }) {
  return (
    <div>
      <Stack direction={"column"}>
        <Typography>{project.name}</Typography>
        <Typography>{project.subtitle}</Typography>
      </Stack>
    </div>
  );
}
