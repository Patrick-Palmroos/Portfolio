import { Stack, Box } from "@mui/material";
import LayerButton from "../util/LayerButton/LayerButton";

export default function TopBar() {
  return (
    <div>
      <Stack
        position={"relative"}
        component={"section"}
        paddingTop={"1.6rem"}
        justifyContent={"center"}
        direction={"row"}
        sx={{
          background: "#1F1E2C",
          position: "fixed",
          width: "100vw",
          paddingBottom: "0.5rem",
          paddingTop: "1rem",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            //background: "black",
            width: "5rem",
            height: "5rem",
            position: "absolute",
            left: "2rem",
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
        <LayerButton title="Projects" link="#projects" />
        <LayerButton title="About me" link="#aboutMe" />
        <LayerButton title="Skills" link="#skills" />
        <LayerButton title="Work" link="#work" />
        <LayerButton title="Education" link="#education" />
      </Stack>
    </div>
  );
}
