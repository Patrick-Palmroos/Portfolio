import { Project } from "../Interfaces";
import { Stack, Typography, Box } from "@mui/material";
import {
  projectBoxStyle,
  imageStyle,
  titleStyle,
  subtitleStyle,
  logoStyle,
} from "./ProjectBoxStyle";
import ProjectTab from "../ProjectTab/ProjectTab";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function ProjectBox({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const scrollPosition = useRef(0);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => window.scrollTo(0, scrollPosition.current);

    if (open) {
      // Save the current scroll position
      scrollPosition.current = window.scrollY;

      // Lock the scroll but keep the scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift from hiding scrollbar
      window.addEventListener("scroll", handleScroll);
    } else {
      // Restore scrolling when the modal is closed
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <div>
      {open
        ? ReactDOM.createPortal(
            <Box>
              <Box
                sx={{
                  position: "fixed",
                  left: "0rem",
                  top: "0rem",
                  zIndex: 50,
                  background: "rgba(0, 0, 0, 0.5)",
                  width: "100vw",
                  height: "100vh",
                }}
                onClick={handleToggle}
              ></Box>
              <ProjectTab callback={handleToggle} project={project} />
            </Box>,
            document.body
          )
        : null}
      <Stack
        sx={{
          ...projectBoxStyle,
          position: "absolute",
          pointerEvents: "none",
          backgroundColor: "color(srgb 0.73 0.53 0.99 / 0.25)",
        }}
      />
      <Stack
        direction={"column"}
        sx={{
          ...projectBoxStyle,
          "&:hover": {
            backgroundColor: "color(srgb 0.73 0.53 0.99 / 0.5)",
            transform: "translateY(-0.5rem)",
            transition: "transform 0.4s ease",
          },
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            left: "0rem",
            top: "0rem",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          },
          "&::before": {
            backgroundColor: "#8E5AB7",
            //boxShadow: "inset 0 0 20px 2px rgba(0, 0, 0, 0.25)",
            zIndex: 1,
            transition: "transform 0.4s ease",
          },
          "&::after": {
            opacity: 0,
            background:
              "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
            zIndex: 2,
            transition: "opacity 0.4s ease, transform 0.4s ease",
          },
          "&:hover::after": {
            opacity: 1,
            transform: "translateY(-0.7rem)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          },
          ":hover::before": {
            transform: "translateY(-0.7rem)",
            transition: "transform 0.4s ease",
          },
          ":hover .child": {
            transform: "translateY(-0.7rem)",
            transition: "transform 0.4s ease",
          },
          ":hover .image": {
            transform: "translateY(-0.7rem)",
          },
        }}
        component={"button"}
        disabled={open}
        onClick={handleToggle}
      >
        <Typography sx={titleStyle} className="child">
          {project.name}
        </Typography>
        <Stack direction={"row"} paddingLeft={"1rem"} paddingBottom={"0.3rem"}>
          {project.logos.map((value, index) => (
            <img
              key={index}
              src={value}
              alt={`logo ${index}`}
              style={logoStyle}
              className="image"
            />
          ))}
        </Stack>
        <Typography variant="h2" sx={subtitleStyle} className="child">
          {project.subtitle}
        </Typography>
        <img
          src={project.image}
          alt="picture of software"
          style={imageStyle}
          className="image"
        />
      </Stack>
    </div>
  );
}
