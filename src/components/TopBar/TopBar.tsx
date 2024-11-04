import { Stack, Box, Typography } from "@mui/material";
import LayerButton from "../util/LayerButton/LayerButton";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import HamburgerMenu from "../util/HamburgerMenu/HamburgerMenu";
import { useLanguage } from "../util/languageContext";

export default function TopBar({
  titleLang,
}: {
  titleLang: (arg0: string) => void;
}) {
  const { language, toggleLanguage } = useLanguage();
  const isDesktop = useMediaQuery({ query: "(min-width: 1080px)" });
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    titleLang(language);
  }, [language, titleLang]);

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
          height: isDesktop ? "4rem" : "2.8rem",
          zIndex: 10,
        }}
      >
        <Box
          component={"a"}
          href="#"
          sx={{
            width: "3.9rem",
            height: "3.9rem",
            position: "absolute",
            left: "0.1rem",
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
              left: isDesktop ? "0.5rem" : "0.3rem",
              top: isDesktop ? "0.5rem" : "0.3rem",
              width: isDesktop ? "4rem" : "3.4rem",
              height: isDesktop ? "4rem" : "3.4rem",
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
            {/*Language Option */}
            <Box
              component={"button"}
              onClick={toggleLanguage}
              sx={{
                border: "none",
                background: "transparent",
                opacity: 0.6,
                position: "fixed",
                right: "0.6rem",
                top: "1.5rem",
                width: "4rem",
                height: "3rem",
                cursor: "pointer",
                transition: "0.3s ease",
                WebkitTapHighlightColor: "transparent",

                ":hover": {
                  opacity: 1,
                  transition: "0.3s ease",
                },

                ":hover .image": {
                  transform: "translateY(-0.2rem) scale(1.1)",
                  transition: "0.3s ease",
                },

                ":hover .txt": {
                  transform: "translateY(0.2rem) scale(1.1)",
                  transition: "0.3s ease",
                },
              }}
            >
              <img
                className="image"
                src={
                  language === "en"
                    ? "images/lang/fi.png"
                    : "images/lang/en.webp"
                }
                alt="flag"
                style={{
                  position: "absolute",
                  top: "0.1rem",
                  left: "0.8rem",
                  width: "2.5rem",
                  height: "auto",
                  transition: "0.3s ease",
                }}
              ></img>
              <Typography
                className="txt"
                variant="h2"
                sx={{
                  fontSize: "17px",
                  position: "absolute",
                  left: "0.4rem",
                  top: "1.7rem",
                  transition: "0.3s ease",
                }}
              >
                {language === "en" ? "Finnish" : "English"}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ position: "absolute", right: "1.8rem", top: "0.8rem" }}>
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
          </Stack>
          {/*Language Option*/}
          <Box
            component={"button"}
            onClick={toggleLanguage}
            sx={{
              border: "none",
              background: "transparent",
              opacity: 0.8,
              position: "relative",
              right: "-8.2rem",
              top: "5rem",
              width: "4rem",
              height: "3rem",
              cursor: "pointer",
              transition: "0.3s ease",
              WebkitTapHighlightColor: "transparent",

              ":hover": {
                opacity: 1,
                transition: "0.3s ease",
              },

              ":hover .image": {
                transform: "translateY(-0.2rem) scale(1.1)",
                transition: "0.3s ease",
              },

              ":hover .txt": {
                transform: "translateY(0.2rem) scale(1.1)",
                transition: "0.3s ease",
              },
            }}
          >
            <img
              className="image"
              src={
                language === "en" ? "images/lang/fi.png" : "images/lang/en.webp"
              }
              alt="flag"
              style={{
                position: "absolute",
                top: "0.1rem",
                left: "0.8rem",
                width: "2.5rem",
                height: "auto",
                transition: "0.3s ease",
              }}
            ></img>
            <Typography
              className="txt"
              variant="h2"
              sx={{
                fontSize: "17px",
                position: "absolute",
                left: "0.4rem",
                top: "1.7rem",
                transition: "0.3s ease",
              }}
            >
              {language === "en" ? "Finnish" : "English"}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
