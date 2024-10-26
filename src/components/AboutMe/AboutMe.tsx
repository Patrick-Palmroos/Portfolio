import { Typography, Box } from "@mui/material";
import { boxStyle } from "./AboutMeStyle";
import ScrollAnimation from "react-animate-on-scroll";
import { useMediaQuery } from "react-responsive";

export default function AboutMe() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1224px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });

  return (
    <div>
      <Box>
        <ScrollAnimation
          animateIn={"fadeInLeft"}
          duration={0.5}
          animateOnce={true}
        >
          <Box
            sx={
              isTabletOrMobile
                ? { ...boxStyle }
                : {
                    ...boxStyle,
                    width: "70vw",
                    maxHeight: "29rem",
                    left: "-1rem",
                    borderWidth: isVeryTiny ? "6px" : "3px",
                    marginTop: isVeryTiny ? "2rem" : "1rem",
                  }
            }
          >
            <ScrollAnimation
              animateIn={"fadeIn"}
              delay={300}
              duration={0.5}
              animateOnce={true}
            >
              <Typography
                variant="h2"
                sx={
                  isTabletOrMobile
                    ? { fontSize: "25px" }
                    : isVeryTiny
                    ? { fontSize: "calc(2vw + 2px)" }
                    : { fontSize: "15px" }
                }
              >
                Hi! My name is Patrick Palmroos, and I'm a third-year student at
                Tampere University of Applied Sciences. I am studying a Bachelor
                of Business Administration degree, specializing in Software
                Development. I love learning new things and continuously strive
                to develop my skills and grow as a person. I enjoy working with
                people, taking on new challenges, and learning from them!
                <br />
                <br /> I've always considered myself a quick learner, and
                seeking knowledge has always been something I aspire toward. I
                strive to improve my skills and knowledge every day! My goal is
                to be able to look back at myself a year ago and say, 'Wow! I
                knew nothing!'. My goal is to be the best version of myself I
                can be!
              </Typography>
            </ScrollAnimation>
          </Box>
        </ScrollAnimation>
      </Box>
    </div>
  );
}