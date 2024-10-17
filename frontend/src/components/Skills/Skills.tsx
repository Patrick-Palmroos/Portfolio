import { Box } from "@mui/material";
import SkillsJson from "../util/skills.json";
import { gridStyle } from "./SkillsStyle";
import { Skill } from "../util/Interfaces";
import SkillBox from "../util/SkillBox/SkillBox";
import ScrollAnimation from "react-animate-on-scroll";

export default function Skills() {
  const skillsList = SkillsJson.skills;
  const topRow = skillsList.slice(0, 2);
  const theMiddle = skillsList.slice(2, skillsList.length - 3);
  const bottomRow = skillsList.slice(skillsList.length - 3, skillsList.length);

  return (
    <div>
      <ScrollAnimation
        animateIn={"fadeIn"}
        duration={0.5}
        animateOnce={true}
        delay={200}
      >
        <Box
          sx={{
            height: "40.5rem",
            width: "38rem",
            marginBottom: "5rem",
            //marginLeft: "2rem",
          }}
          alignContent={"center"}
        >
          <Box marginLeft={"1rem"}>
            {/*TopRow*/}
            <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(5, 6rem)" }}>
              <Box />
              <Box />
              {topRow.map((skill: Skill) => (
                <SkillBox skill={skill} key={skill.id} />
              ))}
              <Box />
            </Box>
            {/*The middle parts*/}
            <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(5, 6rem)" }}>
              <Box />
              {theMiddle.map((skill: Skill) => (
                <SkillBox skill={skill} key={skill.id} />
              ))}
            </Box>
            {/*Bottom Row*/}
            <Box sx={{ ...gridStyle, gridTemplateColumns: "repeat(4, 6rem)" }}>
              <Box />
              {bottomRow.map((skill: Skill) => (
                <SkillBox skill={skill} key={skill.id} />
              ))}
            </Box>
          </Box>
        </Box>
      </ScrollAnimation>
    </div>
  );
}
