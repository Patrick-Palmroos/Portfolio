import { Box } from "@mui/material";
import { Skill } from "../Interfaces";

export default function SkillBox(skill: Skill) {
  return (
    <div>
      <Box
        sx={{
          gridColumn: `span ${skill.width}`,
          gridRow: `span ${skill.height}`,
          backgroundColor: "white",
          boxShadow: "inset 0 0 10px 2px rgba(0, 0, 0, 0.75)",
        }}
      ></Box>
    </div>
  );
}
