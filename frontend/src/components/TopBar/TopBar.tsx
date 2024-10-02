import { Stack, Typography, Box } from "@mui/material";
import LayerButton from "../util/LayerButton";

export default function TopBar() {
  return (
    <div>
      <Stack component={"section"} paddingTop={"3rem"} alignItems={"center"}>
        <LayerButton title="Home" />
      </Stack>
    </div>
  );
}
