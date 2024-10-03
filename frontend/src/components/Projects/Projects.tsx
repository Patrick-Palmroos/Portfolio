import { Stack, Typography, Box } from "@mui/material";
import ProjectJson from "../util/projects.json";

export default function Projects() {
  return (
    <div>
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          {ProjectJson.projects.map((project) => (
            <Box key={project.id}>
              <Typography>{project.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
