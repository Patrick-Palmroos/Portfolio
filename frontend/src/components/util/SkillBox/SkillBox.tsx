import { Box } from "@mui/material";
import { Skill } from "../Interfaces";
import { imageStyle } from "./SkillBoxStyle";

export default function SkillBox({ skill }: { skill: Skill }) {
  return (
    <Box
      key={skill.id}
      sx={{
        gridColumn: `span ${skill.width}`,
        gridRow: `span ${skill.height}`,
        backgroundColor: "white",
        boxShadow: "inset 0 0 10px 2px rgba(0, 0, 0, 0.75)",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <img src={skill.image} alt="skill" style={imageStyle} />
    </Box>
  );
}
