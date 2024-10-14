import { Box } from "@mui/material";
import { Work } from "../Interfaces";
import { buttonStyle } from "./WorkButtonStyle";

export default function WorkButton({
  width,
  height,
  work,
  callback,
  active = false,
}: {
  width: number;
  height: number;
  work: Work;
  callback: () => void;
  active?: boolean;
}) {
  return (
    <div>
      <Box
        component={"button"}
        onClick={callback}
        sx={
          active
            ? {
                ...buttonStyle,
                width: `${width}rem`,
                height: `${height}rem`,
                background: "purple",
              }
            : {
                ...buttonStyle,
                width: `${width}rem`,
                height: `${height}rem`,
                "&:hover": {
                  background: "red",
                },
              }
        }
      >
        <h2>{work.name}</h2>
      </Box>
    </div>
  );
}
