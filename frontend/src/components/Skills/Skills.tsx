import { Box } from "@mui/material";
import SkillsJson from "../util/skills.json";
import { gridStyle } from "./SkillsStyle";
import { Skill } from "../util/Interfaces";
import SkillBox from "../util/SkillBox/SkillBox";

export default function Skills() {
  const skillsList = SkillsJson.skills;
  const topRow = skillsList.slice(0, 2);
  const theMiddle = skillsList.slice(2, skillsList.length - 3);
  const bottomRow = skillsList.slice(skillsList.length - 3, skillsList.length);

  return (
    <div>
      <Box
        sx={{ height: "44.5rem", width: "35rem", marginBottom: "5rem" }}
        alignContent={"center"}
      >
        {/*TopRow*/}
        <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(4, 5rem)" }}>
          <Box />
          {topRow.map((skill: Skill) => (
            <SkillBox skill={skill} />
          ))}
          <Box />
        </Box>
        {/*The middle parts*/}
        <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(5, 5rem)" }}>
          {theMiddle.map((skill: Skill) => (
            <SkillBox skill={skill} />
          ))}
        </Box>
        {/*Bottom Row*/}
        <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(4, 5rem)" }}>
          <Box />
          {bottomRow.map((skill: Skill) => (
            <SkillBox skill={skill} key={skill.id} />
          ))}
        </Box>
      </Box>
    </div>
  );
}
