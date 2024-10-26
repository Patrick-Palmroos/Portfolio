import { Stack, Box } from "@mui/material";
import LayerButton from "../util/LayerButton/LayerButton";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import HamburgerMenu from "../util/HamburgerMenu/HamburgerMenu";
import { useLanguage } from "../util/languageContext";

export default function TopBar() {
  const { language, toggleLanguage } = useLanguage();
  const isDesktop = useMediaQuery({ query: "(min-width: 1080px)" });
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [isDesktop]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Stack
        position={"relative"}
        component={"section"}
        paddingTop={"1.6rem"}
        justifyContent={"center"}
        direction={"row"}
        sx={{
          background: "#19121c",
          position: "fixed",
          width: "100vw",
          paddingRight: "0.1rem",
          paddingBottom: "0.5rem",
          paddingTop: "1rem",
          height: "4rem",
          zIndex: 10,
        }}
      >
        <Box
          component={"a"}
          href="#"
          sx={{
            width: "5rem",
            height: "5rem",
            position: "absolute",
            left: "0.2rem",
            top: "0.2rem",
            WebkitTapHighlightColor: "transparent",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0)",
            transition: "0.4s ease",

            ":hover": {
              background: "rgba(0, 0, 0, 0.5)",
            },

            ":hover .img": {
              transform: "scale(1.1)",
              transition: "0.2s ease",
            },
          }}
        >
          <img
            className="img"
            src="pp.png"
            alt="logo"
            style={{
              position: "absolute",
              transition: "0.4s ease",
              left: isDesktop ? "0.5rem" : "0.8rem",
              top: isDesktop ? "0.5rem" : "0.8rem",
              width: isDesktop ? "4rem" : "3.5rem",
              height: isDesktop ? "4rem" : "3.5rem",
            }}
          ></img>
        </Box>
        {isDesktop ? (
          <Box flexDirection={"row"} display={"flex"}>
            <LayerButton
              title={language === "en" ? "Projects" : "Projektit"}
              link="#projects"
            />
            <LayerButton
              title={language === "en" ? "About Me" : "Minusta"}
              link="#aboutMe"
            />
            <LayerButton
              title={language === "en" ? "Skills" : "Taidot"}
              link="#skills"
            />
            <LayerButton
              title={language === "en" ? "Work" : "Työt"}
              link="#work"
            />
            <LayerButton
              title={language === "en" ? "Education" : "Koulutus"}
              link="#education"
            />
          </Box>
        ) : (
          <Box>
            <Box sx={{ position: "absolute", right: "2rem", top: "1.2rem" }}>
              <HamburgerMenu callback={handleClick} />
            </Box>
          </Box>
        )}
        <Box
          sx={{
            zIndex: 11,
            top: "5.5rem",
            right: open ? "0rem" : "-20rem",
            height: "100%",
            width: "20rem",
            position: "fixed",
            backgroundColor: "#19121c",
            transition: "0.5s ease",

            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(255, 0, 137, 0.4), transparent 80%)",
            },
          }}
        >
          <Stack
            flexDirection={"column"}
            display={"flex"}
            alignItems={"center"}
            marginTop={"1rem"}
            spacing={1}
          >
            <LayerButton title="Projects" link="#projects" />
            <LayerButton title="About me" link="#aboutMe" />
            <LayerButton title="Skills" link="#skills" />
            <LayerButton title="Work" link="#work" />
            <LayerButton title="Education" link="#education" />
            <LayerButton title="Socials" link="#socials" />
          </Stack>
        </Box>
        <Box
          component={"button"}
          onClick={toggleLanguage}
          sx={{
            background: "white",
            position: "absolute",
            right: "5rem",
            top: "3rem",
            //width: "1rem",
            //height: "1rem",
          }}
        >
          {language === "en" ? "Finnish" : "English"}
        </Box>
      </Stack>
    </div>
  );
}
