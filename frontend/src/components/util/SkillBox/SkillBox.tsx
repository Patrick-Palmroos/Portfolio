import { Box } from "@mui/material";
import { Skill } from "../Interfaces";
import { imageStyle } from "./SkillBoxStyle";

export default function SkillBox({ skill }: { skill: Skill }) {
  return (
    <Box
      component={"a"}
      href={skill.link}
      sx={{
        gridColumn: `span ${skill.width}`,
        gridRow: `span ${skill.height}`,
        boxShadow: "inset 0 0 5px 0px rgba(0, 0, 0, 0.75)",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <img src={skill.image} alt="skill" style={imageStyle} />
    </Box>
  );
}
