import { Stack, Box } from "@mui/material";
import LayerButton from "../util/LayerButton/LayerButton";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import HamburgerMenu from "../util/HamburgerMenu/HamburgerMenu";

export default function TopBar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1080px)" });
  const [open, setOpen] = useState<boolean>(false);

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
            left: "1rem",
            top: "1rem",
          }}
        >
          <img
            src="/pp.png"
            alt="logo"
            style={{
              width: "4rem",
              height: "4rem",
            }}
          ></img>
        </Box>
        {isDesktop ? (
          <Box flexDirection={"row"} display={"flex"}>
            <LayerButton title="Projects" link="#projects" />
            <LayerButton title="About me" link="#aboutMe" />
            <LayerButton title="Skills" link="#skills" />
            <LayerButton title="Work" link="#work" />
            <LayerButton title="Education" link="#education" />
            <LayerButton title="Socials" link="#socials" />
          </Box>
        ) : (
          <Box sx={{ position: "absolute", right: "2rem" }}>
            <HamburgerMenu callback={handleClick} />
          </Box>
        )}
      </Stack>
    </div>
  );
}
