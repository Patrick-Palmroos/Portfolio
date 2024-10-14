import { Box, Typography } from "@mui/material";
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
                background: "green",

                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  width: `${width}rem`,
                  height: `${height}rem`,
                  top: "0px",
                  left: "0px",
                  background: "blue",
                  zIndex: 2,
                },

                "&::after": {
                  background:
                    "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
                },

                "&:hover": {
                  background: "red",
                },
              }
        }
      >
        <Typography variant={"h1"} sx={{ zIndex: 3, position: "relative" }}>
          {work.name}
        </Typography>
      </Box>
    </div>
  );
}
