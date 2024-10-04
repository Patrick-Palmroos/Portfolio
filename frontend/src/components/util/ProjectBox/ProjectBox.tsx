import Project from "../ProjectInterface";
import { Stack, Typography, Box } from "@mui/material";
import {
  projectBoxStyle,
  imageStyle,
  titleStyle,
  subtitleStyle,
} from "./ProjectBoxStyle";

export default function ProjectBox({ project }: { project: Project }) {
  return (
    <div>
      <Stack direction={"column"} sx={projectBoxStyle}>
        <Typography sx={titleStyle}>{project.name}</Typography>
        <Typography variant="h2" sx={subtitleStyle}>
          {project.subtitle}
        </Typography>
        <img src={project.image} alt="picture of software" style={imageStyle} />
      </Stack>
    </div>
  );
}
