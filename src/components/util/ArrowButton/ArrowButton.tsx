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
                  width: "4.5rem",
                  height: "5.5rem",
                  boxSizing: "inline-block",
                  position: "relative",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",

                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    borderRadius: "0.6rem",
                    left: "-5%",
                    display: "block",
                  },

                  "&::before": {
                    background: "linear-gradient(90deg, #998CFC 10%, #BB85FA)",
                    top: "1.8rem",
                    left: "0.25rem",
                    height: "0.5rem",
                    width: "3rem",
                    rotate: "55deg",
                    transform: "translateX(-0.35rem) translateY(-0.25rem)",
                    transition: "0.2s ease",
                    zIndex: 2,
                  },

                  "&::after": {
                    background: "linear-gradient(0deg, #998CFC 10%, #BB85FA)",
                    top: "2.2rem",
                    left: "1.5rem",
                    height: "3rem",
                    width: "0.5rem",
                    rotate: "35deg",
                    transform: "translateX(-0rem)",
                    transition: "0.2s ease",
                    zIndex: 3,
                  },

                  "&:hover::after": {
                    rotate: "45deg",
                    height: "2.5rem",
                    transform: "translateX(-0.1rem) translateY(-0.1rem)",
                    transition: "0.2s ease",
                  },
                  "&:hover::before": {
                    rotate: "45deg",
                    width: "2.5rem",
                    transform: "translateX(0.05rem) translateY(-0.29rem)",
                    transition: "0.2s ease",
                  },

                  "&:hover .anim": {
                    width: "1.75rem",
                    right: "3.25rem",
                    top: "2.35rem",
                    background: "#BB85FA",
                    transition: "0.2s ease",
                  },
                  "&:hover .circle": {
                    backgroundColor: "color(srgb 0 0 0 / 0.20)",
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
                    backgroundColor: "none",
                    width: "4.2rem",
                    height: "4.2rem",
                    top: "0.45rem",
                    borderRadius: "50%",
                    left: "-1rem",
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
                    background: "#BB85FA",
                    height: "0.5rem",
                    width: "0.1rem",
                    right: "2rem",
                    top: "2.35rem",
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
