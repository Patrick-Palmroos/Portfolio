import { Box } from "@mui/material";
import { Work } from "../Interfaces";
import { buttonStyle } from "./WorkButtonStyle";

export default function WorkButton({
  width,
  height,
  work,
  callback,
}: {
  width: number;
  height: number;
  work: Work;
  callback: () => void;
}) {
  return (
    <div>
      <Box
        component={"button"}
        onClick={callback}
        sx={{ ...buttonStyle, width: `${19}rem`, height: `${6}rem` }}
      >
        <h2>{work.name}</h2>
      </Box>
    </div>
  );
}
