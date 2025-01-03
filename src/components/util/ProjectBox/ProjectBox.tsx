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
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../languageContext";

export default function ProjectBox({ project }: { project: Project }) {
  const { language } = useLanguage();
  const isDesktop = useMediaQuery({ query: "(min-width: 1215px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 940px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const scrollPosition = useRef(0);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => window.scrollTo(0, scrollPosition.current);

    if (open) {
      setAnimate(true);
      // Save the current scroll position
      scrollPosition.current = window.scrollY;

      // Lock the scroll but keep the scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = isVeryTiny ? "1.05rem" : "0rem"; // Prevent layout shift from hiding scrollbar

      window.addEventListener("scroll", handleScroll);
    } else {
      setAnimate(false);
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
                  opacity: animate ? 1 : 0,
                  transition: "opacity 0.5s ease-out",
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
          zIndex: 1,
          borderRadius: isVeryTiny ? "20px" : "0px",
          width: isDesktop
            ? "30.25rem"
            : isMobile
            ? "22rem"
            : isVeryTiny
            ? "80vw"
            : "100vw",
          height: isMobile ? "14.4rem" : isVeryTiny ? "20rem" : "17rem",
        }}
      />
      <Stack
        direction={"column"}
        sx={{
          ...projectBoxStyle,
          zIndex: 1,
          borderRadius: isVeryTiny ? "20px" : "0px",
          width: isDesktop
            ? "30.25rem"
            : isMobile
            ? "22rem"
            : isVeryTiny
            ? "80vw"
            : "100vw",
          height: isMobile ? "14.4rem" : isVeryTiny ? "20rem" : "17rem",
          "&:hover": {
            backgroundColor: isVeryTiny
              ? "color(srgb 0.73 0.53 0.99 / 0.5)"
              : "color(srgb 0.73 0.53 0.99 / 0)",
            transform: isMobile ? "translateY(-0.5rem)" : "translateY(0rem)",
            transition: "transform 0.4s ease",
          },
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            left: "0rem",
            top: "0rem",
            width: "100%",
            height: "100%",
            borderRadius: isVeryTiny ? "20px" : "0px",
          },
          "&::before": {
            backgroundImage: `url(${project.backDrop})`,
            backgroundSize: "cover",
            opacity: 0.4,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            transition: "transform 0.4s ease, opacity 0.4s ease",
          },
          "&::after": {
            opacity: 0,
            background:
              "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
            zIndex: 2,
            transition: "opacity 1s ease, transform 0.4s ease",
          },
          "&:hover::after": {
            opacity: isMobile ? 1 : 0.4,
            transform: isMobile ? "translateY(-0.7rem)" : "translateY(0rem)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          },
          ":hover::before": {
            opacity: isMobile ? 1 : 0.4,
            transform: isMobile ? "translateY(-0.7rem)" : "translateY(0rem)",
            transition: "transform 0.4s ease, opacity 0.4s ease",
          },
          ":hover .child": {
            transform: isMobile ? "translateY(-0.7rem)" : "translateY(0rem)",
            transition: "transform 0.4s ease",
          },
          ":hover .image": {
            transform: isMobile ? "translateY(-0.7rem)" : "translateY(0rem)",
          },
        }}
        component={"button"}
        disabled={open}
        onClick={handleToggle}
      >
        <Box
          zIndex={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography
            sx={
              isMobile
                ? { ...titleStyle }
                : isVeryTiny
                ? {
                    ...titleStyle,
                    marginTop: "1rem",
                    fontSize: "calc(4vw + 1rem)",
                    marginLeft: "5rem",
                  }
                : {
                    ...titleStyle,
                    fontSize: "calc(4vw + 1rem)",
                    marginLeft: "3rem",
                  }
            }
            className="child"
          >
            {project.name}
          </Typography>
          <Stack
            direction={"row"}
            paddingLeft={"1rem"}
            marginLeft={isMobile ? "0rem" : isVeryTiny ? "5rem" : "3rem"}
            paddingBottom={"0.3rem"}
          >
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
        </Box>
        <Typography
          variant="h2"
          sx={
            isMobile
              ? { ...subtitleStyle }
              : isVeryTiny
              ? {
                  ...subtitleStyle,
                  fontSize: "calc(0.2vw + 1.1rem)",
                  marginTop: "1rem",
                  width: "45vw",
                  height: "14rem",
                  marginLeft: "5rem",
                }
              : {
                  ...subtitleStyle,
                  fontSize: "calc(0.3vw + 1rem)",
                  width: "70vw",
                  height: "14rem",
                  marginLeft: "3rem",
                }
          }
          className="child"
        >
          {language === "en" ? project.subtitleEn : project.subtitleFi}
        </Typography>
        <img
          src={project.images[0]}
          alt="picture of software"
          style={isDesktop ? { ...imageStyle } : { display: "none" }}
          className="image"
        />
      </Stack>
    </div>
  );
}
