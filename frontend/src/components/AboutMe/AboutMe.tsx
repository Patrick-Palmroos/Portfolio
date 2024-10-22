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
                    width: "60vw",
                    maxHeight: "25rem",
                    left: "-1rem",
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
                    : { fontSize: "13px" }
                }
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
                <br />
                <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum
              </Typography>
            </ScrollAnimation>
          </Box>
        </ScrollAnimation>
      </Box>
    </div>
  );
}
