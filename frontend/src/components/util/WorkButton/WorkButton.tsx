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
  active: boolean;
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
                width: `${19}rem`,
                height: `${6}rem`,
                background: "purple",
                "&:hover": {
                  background: "red",
                },
              }
            : {
                ...buttonStyle,
                width: `${19}rem`,
                height: `${6}rem`,
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
