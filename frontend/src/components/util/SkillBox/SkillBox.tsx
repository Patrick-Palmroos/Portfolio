import { Box } from "@mui/material";
import { Skill } from "../Interfaces";
import { imageStyle } from "./SkillBoxStyle";

export default function SkillBox({
  skill,
  activeTag = "frontend",
}: {
  skill: Skill;
  activeTag?: string;
}) {
  const active: boolean = skill.tag === activeTag;

  return (
    <Box
      component={"a"}
      href={skill.link}
      sx={{
        position: "relative",
        gridColumn: `span ${skill.width}`,
        gridRow: `span ${skill.height}`,
        boxShadow: active
          ? "inset 0 0 5px 0px rgba(0, 0, 0, 0)"
          : "inset 0 0 5px 0px rgba(0, 0, 0, 0.75)",
        textAlign: "center",
        borderRadius: active ? "4px" : "0px",
        alignContent: "center",
        transition: "0.5s ease",
        WebkitTapHighlightColor: "transparent",
        background: active ? `rgba(${skill.color1}, 0.25)` : "transparent",

        "&:hover": {
          background: `rgba(${skill.color1}, 0.25)`,
          boxShadow: "inset 0 0 5px 0px rgba(0, 0, 0, 0)",
          borderRadius: "4px",
          transition: "0.2s ease",
        },

        "&::before, &::after": {
          content: '""',
          position: "absolute",
          height: "100%",
          width: "100%",
          left: "0px",
          top: "0px",
          borderRadius: "4px",
          opacity: active ? 1 : 0,
        },

        "&::before": {
          zIndex: 2,
          background: `linear-gradient(to top right, rgba(${skill.color1}, 1), rgba(${skill.color2}, 1))`,
          transform: active ? "translateY(-0.5rem)" : "translateY(0rem)",
          transition: "0.5s ease",
        },

        "&::after": {
          zIndex: 1,
          background: `rgba(${skill.color1}, 0.35)`,
          transform: active ? "translateY(-0.25rem)" : "translateY(0rem)",
          transition: "0.5s ease",
        },

        "&:hover::before": {
          opacity: 1,
          transform: "translateY(-0.5rem)",
          transition: "0.2s ease",
        },
        "&:hover::after": {
          opacity: 1,
          transform: "translateY(-0.25rem)",
          transition: "0.2s ease",
        },

        ".image": {
          filter: "saturate(0)",
          transition: "0.5s ease",
        },
        "&:hover .image": {
          filter: `drop-shadow(0 0px 5px rgba(${skill.glow})) saturate(1)`,
          transform: "translateY(-0.5rem)",
          transition: "0.2s ease",
        },
      }}
    >
      <img
        src={skill.image}
        alt="skill"
        style={
          active
            ? {
                ...imageStyle,
                filter: `drop-shadow(0 0px 5px rgba(${skill.glow})) saturate(1)`,
                transform: "translateY(-0.5rem)",
              }
            : { ...imageStyle }
        }
        className="image"
      />
    </Box>
  );
}
