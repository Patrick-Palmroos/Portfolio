import { Box } from "@mui/material";
import SkillsJson from "../util/skills.json";
import { gridStyle } from "./SkillsStyle";
import { Skill } from "../util/Interfaces";
import SkillBox from "../util/SkillBox/SkillBox";
import ScrollAnimation from "react-animate-on-scroll";
import { useMediaQuery } from "react-responsive";
import FilterButton from "../util/FilterButton/FilterButton";
import { useState, useEffect } from "react";

export default function Skills() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 730px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });
  const [activeTag, setActiveTag] = useState<string>("");
  const skillsList = SkillsJson.skills;
  const topRow = skillsList.slice(0, 2);
  const theMiddle = skillsList.slice(2, skillsList.length - 3);
  const bottomRow = skillsList.slice(skillsList.length - 3, skillsList.length);

  const boxSize = isDesktop ? "5rem" : isVeryTiny ? "4.2rem" : "3.3rem";

  useEffect(() => {
    if (isDesktop) {
      setActiveTag("");
    }
  }, [isDesktop]);

  const handleClick = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag("");
    } else {
      setActiveTag(tag);
    }
  };

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
            height: isDesktop ? "40.5rem" : isVeryTiny ? "38rem" : "34rem",
            width: isDesktop ? "38rem" : "100%",
            marginBottom: "5rem",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          alignContent={"center"}
        >
          {!isDesktop && (
            <Box
              display={isMobile ? "flex" : "grid"}
              sx={
                isMobile
                  ? {
                      paddingRight: "5rem",
                      flexDirection: "column",
                    }
                  : {
                      gridTemplateColumns: "auto auto",
                      columnGap: "0.2rem",
                    }
              }
            >
              <FilterButton
                title="Frontend"
                active={activeTag === "frontend"}
                callback={() => {
                  handleClick("frontend");
                }}
              />
              <FilterButton
                title="Backend"
                active={activeTag === "backend"}
                callback={() => {
                  handleClick("backend");
                }}
              />
              <FilterButton
                title="Api"
                active={activeTag === "api"}
                callback={() => {
                  handleClick("api");
                }}
              />
              <FilterButton
                title="Tools"
                active={activeTag === "tools"}
                callback={() => {
                  handleClick("tools");
                }}
              />
            </Box>
          )}
          <Box marginLeft={isDesktop ? "3rem" : "0rem"}>
            {/*TopRow*/}
            <Box
              sx={{
                ...gridStyle,
                gridTemplateColumns: `repeat(5, ${boxSize})`,
                gridAutoRows: `${boxSize}`,
              }}
            >
              <Box />
              <Box />
              {topRow.map((skill: Skill) => (
                <SkillBox skill={skill} activeTag={activeTag} key={skill.id} />
              ))}
              <Box />
            </Box>
            {/*The middle parts*/}
            <Box
              sx={{
                ...gridStyle,
                gridTemplateColumns: `repeat(6, ${boxSize})`,
                gridAutoRows: `${boxSize}`,
              }}
            >
              <Box />
              {theMiddle.map((skill: Skill) => (
                <SkillBox skill={skill} activeTag={activeTag} key={skill.id} />
              ))}
            </Box>
            {/*Bottom Row*/}
            <Box
              sx={{
                ...gridStyle,
                gridTemplateColumns: `repeat(5, ${boxSize})`,
                gridAutoRows: `${boxSize}`,
              }}
            >
              <Box />
              {bottomRow.map((skill: Skill) => (
                <SkillBox skill={skill} activeTag={activeTag} key={skill.id} />
              ))}
            </Box>
          </Box>
        </Box>
      </ScrollAnimation>
    </div>
  );
}
