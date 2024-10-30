import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function ArrowButton({ callback }: { callback: () => void }) {
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          marginLeft: "-1rem",
          width: "6rem",
          height: "6rem",
        }}
      >
        <Box
          component={"button"}
          onClick={callback}
          sx={
            isVeryTiny
              ? {
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",

                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    borderRadius: "20px",
                    left: "0.3rem",
                    top: "2.7rem",
                  },

                  "&::before": {
                    background: "linear-gradient(90deg, #998CFC 10%, #BB85FA)",
                    height: "0.6rem",
                    width: "4rem",
                    transition: "0.2s ease",
                    transform: "rotate(50deg) translate(-0.2rem, -1.8rem)",
                    zIndex: 2,
                  },

                  "&::after": {
                    background: "linear-gradient(0deg, #998CFC 10%, #BB85FA)",
                    height: "0.6rem",
                    width: "4rem",
                    transform: "rotate(-50deg) translate(-0.2rem, 1.8rem)",
                    transition: "0.2s ease",
                    zIndex: 3,
                  },

                  "&:hover::before": {
                    transform:
                      "rotate(40deg) translate(0.55rem, -1.4rem) scaleX(0.7)",
                    transition: "0.2s ease",
                  },

                  "&:hover::after": {
                    //width: "3rem",
                    transform:
                      "rotate(-40deg) translate(0.55rem, 1.4rem) scaleX(0.7)",
                    transition: "0.2s ease",
                  },

                  "&:hover .anim": {
                    width: "2rem",
                    transform: "translate(-1.8rem, 0rem)",
                    //background: "#BB85FA",
                    transition: "0.2s ease",
                  },
                  "&:hover .circle": {
                    backgroundColor: "color(srgb 0 0 0 / 0.20)",
                    transition: "0.2s ease",
                  },
                }
              : {
                  //mobile view
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",

                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    borderRadius: "20px",
                    left: "0.3rem",
                    height: "0.5rem",
                    width: "3.5rem",
                    top: "2.7rem",
                  },

                  "&::before": {
                    background: "linear-gradient(90deg, #FECBFF 0%, #e4e4e4)",
                    transition: "0.2s ease",
                    transform: "rotate(60deg) translate(-0.5rem, -1.8rem)",
                    zIndex: 2,
                  },

                  "&::after": {
                    background: "linear-gradient(90deg, #FECBFF 0%, #e4e4e4)",
                    transform: "rotate(-60deg) translate(-0.5rem, 1.8rem)",
                    transition: "0.2s ease",
                    zIndex: 3,
                  },

                  "&:hover::before": {
                    transform:
                      "rotate(40deg) translate(0.58rem, -1.3rem) scaleX(0.7)",
                    transition: "0.2s ease",
                  },

                  "&:hover::after": {
                    //width: "3rem",
                    transform:
                      "rotate(-40deg) translate(0.58rem, 1.3rem) scaleX(0.7)",
                    transition: "0.2s ease",
                  },

                  "&:hover .anim": {
                    width: "1.5rem",
                    transform: "translate(-1.2rem, 0rem)",
                    background: "#FECBFF",
                    transition: "0.2s ease",
                  },
                  "&:hover .circle": {
                    opacity: 1,
                    transition: "0.2s ease",
                  },
                }
          }
        >
          <Box
            className={"circle"}
            sx={
              isVeryTiny
                ? {
                    position: "absolute",
                    backgroundColor: "none",
                    width: "6rem",
                    height: "6rem",
                    left: "0rem",
                    top: "0rem",
                    borderRadius: "50%",
                    zIndex: 1,
                  }
                : {
                    position: "absolute",
                    background:
                      "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.3) 90%, transparent 100%)",
                    opacity: 0,
                    width: "5rem",
                    height: "16rem",
                    right: "0rem",
                    bottom: "-5rem",
                    //borderRadius: "50%",
                    zIndex: 1,
                  }
            }
          />
          <Box
            className={"anim"}
            sx={
              isVeryTiny
                ? {
                    position: "absolute",
                    background: "#BB85FA",
                    height: "0.6rem",
                    width: "0.1rem",
                    right: "1.5rem",
                    top: "2.7rem",
                    borderRadius: "0.6rem",
                    transition: "0.2s ease",
                    zIndex: 2,
                  }
                : {
                    position: "absolute",
                    background: "#e4e4e4",
                    height: "0.5rem",
                    width: "0.1rem",
                    right: "1.9rem",
                    top: "2.7rem",
                    borderRadius: "0.6rem",
                    transition: "0.2s ease",
                    zIndex: 2,
                  }
            }
          />
        </Box>
      </Box>
    </div>
  );
}
