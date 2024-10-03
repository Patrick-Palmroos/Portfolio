import { Stack, Typography, Box } from "@mui/material";
import ProjectJson from "../util/projects.json";
import Project from "../util/ProjectInterface";

export default function Projects() {
  return (
    <div>
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          {ProjectJson.projects.map((project: Project) => (
            <Box key={project.id}>
              <Typography>{project.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
