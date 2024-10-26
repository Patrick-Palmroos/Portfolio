import { Box, Typography } from "@mui/material";
import { Work } from "../Interfaces";
import {
  buttonStyle,
  childStyle,
  psuedoElemet,
  imageStyle,
} from "./WorkButtonStyle";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../languageContext";

const calcMonths = (startDate: string, endDate: string) => {
  const parseDate = (date: string) => {
    const [month, year] = date.split(".");
    return month + ".1." + year;
  };
  const start: Date = new Date(parseDate(startDate));
  const end: Date =
    endDate === "Current" ? new Date() : new Date(parseDate(endDate));

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();

  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  // Calculate total months difference
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  // Return the result as years and months
  //const years = Math.floor(totalMonths / 12);
  //const months = totalMonths % 12;
  return `${totalMonths}`;
};

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
  const { language } = useLanguage();
  const isDesktop = useMediaQuery({ query: "(min-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 750px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 650px)" });
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
                  transform: "translateY(0.4rem)",
                  transition: "0.2s ease",
                },

                "&::after": {
                  background:
                    "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
                },

                ".child": {
                  transform: "translateY(0.4rem)",
                  transition: "0.2s ease",
                },

                "#title": {
                  color: "#E2FFA6",
                },

                ".image": {
                  transform: "translateY(0.4rem)",
                  filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.3))",
                  transition: "0.2s ease",
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
                ".image": {
                  transition: "0.3s ease",
                },
                "&:hover .image": {
                  transform: "translateY(-0.4rem)",
                  transition: "0.3s ease",
                },
              }
        }
      >
        <Typography
          className={"child"}
          id={"title"}
          variant={"h1"}
          sx={
            isMobile
              ? { ...childStyle }
              : isVeryTiny
              ? {
                  ...childStyle,
                  fontSize: "3.6vw",
                  left: "0.5rem",
                }
              : {
                  ...childStyle,
                  fontSize: "19px",
                  width: "8rem",
                  left: "0.5rem",
                }
          }
        >
          {work.name}
        </Typography>
        <Typography
          className={"child"}
          variant={"h1"}
          sx={
            isMobile
              ? { ...childStyle, top: "2.4rem", fontSize: "20px" }
              : isVeryTiny
              ? {
                  ...childStyle,
                  top: "calc(1vw + 1.7rem)",
                  fontSize: "2.5vw",
                  left: "0.5rem",
                }
              : {
                  ...childStyle,
                  top: "1.5rem",
                  width: "8rem",
                  fontSize: "17px",
                  left: "0.5rem",
                }
          }
        >
          {language === "en" ? work.titleEn : work.titleFi}
        </Typography>
        <Typography
          className={"child"}
          variant={"h1"}
          sx={
            isMobile
              ? { ...childStyle, top: "4.2rem", fontSize: "18px" }
              : isVeryTiny
              ? {
                  ...childStyle,
                  top: "calc(1vw + 3.2rem)",
                  fontSize: "2.5vw",
                  left: "0.5rem",
                }
              : {
                  ...childStyle,
                  top: "2.7rem",
                  width: "8rem",
                  fontSize: "17px",
                  left: "0.5rem",
                }
          }
        >
          {calcMonths(work.startDate, work.endDateEn)}{" "}
          {language === "en" ? "months" : "kuukautta"}
        </Typography>
        {isDesktop && (
          <img
            className="image"
            src={work.logo}
            alt="work logo"
            style={imageStyle}
          />
        )}
      </Box>
    </div>
  );
}
