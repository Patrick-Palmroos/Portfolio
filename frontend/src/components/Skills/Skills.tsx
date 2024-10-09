import { Stack, Typography, Box } from "@mui/material";
import SkillsJson from "../util/skills.json";
import { gridStyle } from "./SkillsStyle";
import { Skill } from "../util/Interfaces";
import SkillBox from "../util/SkillBox/SkillBox";

export default function Skills() {
  return (
    <div>
      <Box sx={gridStyle}>
        {SkillsJson.skills.map((skill: Skill) => (
          <SkillBox skill={skill} />
        ))}
      </Box>
    </div>
  );
}
