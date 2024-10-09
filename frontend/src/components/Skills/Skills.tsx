import { Stack, Typography, Box } from "@mui/material";
import SkillsJson from "../util/skills.json";
import { gridStyle } from "./SkillsStyle";

export default function Skills() {
  return (
    <div>
      <Box sx={gridStyle}>
        {SkillsJson.skills.map((skill) => (
          <Box
            key={skill.id}
            sx={{
              gridColumn: `span ${skill.width}`,
              gridRow: `span ${skill.height}`,
              backgroundColor: "white",
              boxShadow: "inset 0 0 10px 2px rgba(0, 0, 0, 0.75)",
            }}
          />
        ))}
      </Box>
    </div>
  );
}
