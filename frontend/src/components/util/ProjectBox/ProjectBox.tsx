import Project from "../ProjectInterface";
import { Stack, Typography, Box } from "@mui/material";
import {
  projectBoxStyle,
  imageStyle,
  titleStyle,
  subtitleStyle,
  logoStyle,
} from "./ProjectBoxStyle";

export default function ProjectBox({ project }: { project: Project }) {
  return (
    <div>
      <Stack
        direction={"column"}
        sx={projectBoxStyle}
        component={"button"}
        onClick={() => alert(`Project: ${project.name}`)}
      >
        <Typography sx={titleStyle}>{project.name}</Typography>
        <Stack direction={"row"} paddingLeft={"1rem"} paddingBottom={"0.3rem"}>
          {project.logos.map((value, index) => (
            <img
              key={index}
              src={value}
              alt={`logo ${index}`}
              style={logoStyle}
            />
          ))}
        </Stack>
        <Typography variant="h2" sx={subtitleStyle}>
          {project.subtitle}
        </Typography>
        <img src={project.image} alt="picture of software" style={imageStyle} />
      </Stack>
    </div>
  );
}
