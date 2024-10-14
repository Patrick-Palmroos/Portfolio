import { Box, Typography } from "@mui/material";
import { Work } from "../Interfaces";
import { buttonStyle, childStyle, psuedoElemet } from "./WorkButtonStyle";

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

                ".child": {
                  transform: "translateY(0.6rem)",
                },
              }
            : {
                ...buttonStyle,
                width: `${width}rem`,
                height: `${height}rem`,

                "&::before, &::after": {
                  ...psuedoElemet,
                  width: `${width}rem`,
                  height: `${height}rem`,
                },

                "&::before": {},

                "&::after": {
                  opacity: 0,
                  background:
                    "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
                },

                "&:hover::after": {
                  opacity: 1,
                  transform: "translateY(-0.4rem)",
                },
                "&:hover::before": {
                  opacity: 1,
                  transform: "translateY(-0.4rem)",
                },

                "&:hover .child": {
                  transform: "translateY(-0.4rem)",
                },
              }
        }
      >
        <Typography className={"child"} variant={"h1"} sx={childStyle}>
          {work.name}
        </Typography>
      </Box>
    </div>
  );
}
