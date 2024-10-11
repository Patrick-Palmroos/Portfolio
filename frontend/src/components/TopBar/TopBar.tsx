import { Stack } from "@mui/material";
import LayerButton from "../util/LayerButton/LayerButton";

export default function TopBar() {
  return (
    <div>
      <Stack
        component={"section"}
        paddingTop={"1.6rem"}
        justifyContent={"center"}
        direction={"row"}
      >
        <LayerButton title="Projects" link="#projects" />
        <LayerButton title="About me" link="#aboutMe" />
        <LayerButton title="Skills" link="#skills" />
        <LayerButton title="Work" link="#work" />
        <LayerButton title="Education" link="#education" />
      </Stack>
    </div>
  );
}
