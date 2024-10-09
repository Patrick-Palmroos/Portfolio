import { Stack, Typography, Box } from "@mui/material";
import SkillsJson from "../util/skills.json";
import { gridStyle } from "./SkillsStyle";
import { Skill } from "../util/Interfaces";
import SkillBox from "../util/SkillBox/SkillBox";

export default function Skills() {
  const skillsList = SkillsJson.skills;
  const topRow = skillsList.slice(0, 3);
  const theMiddle = skillsList.slice(3, skillsList.length - 3);
  const bottomRow = skillsList.slice(skillsList.length - 3, skillsList.length);
  console.log(theMiddle);
  return (
    <div>
      {/*TopRow*/}
      <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(3, 4rem)" }}>
        {topRow.map((skill: Skill) => (
          <SkillBox skill={skill} />
        ))}
      </Box>
      {/*The middle parts*/}
      <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(5, 4rem)" }}>
        {theMiddle.map((skill: Skill) => (
          <SkillBox skill={skill} />
        ))}
      </Box>
      {/*Bottom Row*/}
      <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(3, 4rem)" }}>
        {bottomRow.map((skill: Skill) => (
          <SkillBox skill={skill} />
        ))}
      </Box>
    </div>
  );
}
