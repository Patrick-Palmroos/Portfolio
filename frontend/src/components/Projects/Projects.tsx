import { Stack, Typography, Box } from "@mui/material";
import ProjectJson from "../util/projects.json";
import Project from "../util/ProjectInterface";
import ProjectBox from "../util/ProjectBox/ProjectBox";

export default function Projects() {
  return (
    <div>
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          {ProjectJson.projects.map((project: Project) => (
            <Box key={project.id}>
              <ProjectBox project={project} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
