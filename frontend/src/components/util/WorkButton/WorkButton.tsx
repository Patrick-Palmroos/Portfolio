import { Box, Typography } from "@mui/material";
import { Work } from "../Interfaces";
import {
  buttonStyle,
  childStyle,
  psuedoElemet,
  imageStyle,
} from "./WorkButtonStyle";

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
                transition: "0.2s ease",

                "&::before, &::after": {
                  ...psuedoElemet,
                  width: `${width}rem`,
                  height: `${height}rem`,
                  transform: "translateY(0.6rem)",
                  transition: "0.2s ease",
                },

                "&::after": {
                  background:
                    "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
                },

                ".child": {
                  transform: "translateY(0.6rem)",
                  transition: "0.2s ease",
                },

                "#title": {
                  color: "#E2FFA6",
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

                "&::after": {
                  opacity: 0,
                  background:
                    "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
                  transition: "0.3s ease",
                },

                "&:hover::after": {
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
        <Typography
          className={"child"}
          id={"title"}
          variant={"h1"}
          sx={childStyle}
        >
          {work.name}
        </Typography>
        <Typography
          className={"child"}
          variant={"h1"}
          sx={{ ...childStyle, top: "2.4rem", fontSize: "20px" }}
        >
          {work.title}
        </Typography>
        <Typography
          className={"child"}
          variant={"h1"}
          sx={{ ...childStyle, top: "4rem", fontSize: "20px" }}
        >
          {work.startDate}-{work.endDate}
        </Typography>
        <img
          src="images/Logos/securitas.png"
          alt="work logo"
          style={imageStyle}
        />
      </Box>
    </div>
  );
}
