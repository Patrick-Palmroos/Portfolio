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
        <LayerButton title="Projects" link="#" />
        <LayerButton title="About me" link="#" />
        <LayerButton title="Skills" link="#" />
        <LayerButton title="Work" link="#" />
        <LayerButton title="Education" link="#" />
      </Stack>
    </div>
  );
}
