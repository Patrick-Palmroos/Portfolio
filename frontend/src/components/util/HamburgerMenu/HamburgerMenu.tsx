import { Box } from "@mui/material";
import { useState } from "react";

const animations = {
  //animations for unchecked to checked state
  xAnimationAfter: {
    "0%": {
      transform: "translate(0rem, 2rem) rotate(0deg)",
    },
    "50%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
    "100%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
  },
  xAnimation: {
    "0%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
    "50%": {
      transform: "translate(0rem, 1rem) rotate(0deg)",
    },
    "100%": {
      transform: "translate(0rem, 1rem) rotate(45deg)",
    },
  },
  xAnimationBefore: {
    "0%": {
      transform: "translate(0rem, 1rem) rotate(0deg)",
    },
    "50%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
    "100%": {
      transform: "translate(0rem, 0rem) rotate(-90deg)",
    },
  },
  //animations for checked to unchecked state
  animationAfter: {
    "0%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
    "50%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
    "100%": {
      transform: "translate(0rem, 2rem)",
    },
  },
  animation: {
    "0%": {
      transform: "translate(0rem, 1rem) rotate(45deg)",
    },
    "50%": {
      transform: "translate(0rem, 1rem) rotate(0deg)",
    },
    "100%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
  },
  animationBefore: {
    "0%": {
      transform: "translate(0rem, 0rem) rotate(-90deg)",
    },
    "50%": {
      transform: "translate(0rem, 0rem) rotate(0deg)",
    },
    "100%": {
      transform: "translate(0rem, 1rem) rotate(0deg)",
    },
  },
};

export default function HamburgerMenu({ callback }: { callback: () => void }) {
  const [clicked, setClicked] = useState(false);

  const handleChange = () => {
    setClicked(true);
    callback();
  };
  return (
    <Box
      component={"label"}
      sx={{
        display: "inline-block",
        position: "relative",
        width: "3rem",
        height: "3rem",
        cursor: "pointer",
        zIndex: 5,
        WebkitTapHighlightColor: "transparent",

        //anims
        "@keyframes xAnimationAfter": animations.xAnimationAfter,
        "@keyframes xAnimation": animations.xAnimation,
        "@keyframes xAnimationBefore": animations.xAnimationBefore,
        "@keyframes animationAfter": animations.animationAfter,
        "@keyframes animation": animations.animation,
        "@keyframes animationBefore": animations.animationBefore,

        //hovers when not checked
        ":hover input[type='checkbox']:not(:checked) + .custom-box": {
          backgroundColor: "primary.light",
          transition: "0.2s ease",
        },

        ":hover input[type='checkbox']:not(:checked) + .custom-box::before": {
          backgroundColor: "primary.light",
          transition: "0.2s ease",
        },

        ":hover input[type='checkbox']:not(:checked) + .custom-box::after": {
          backgroundColor: "primary.light",
          transition: "0.2s ease",
        },

        //animations for when checked
        "input[type='checkbox']:checked + .custom-box": {
          backgroundColor: "info.contrastText",
          transform: "translate(0rem, 1rem) rotate(45deg)",
          animation: "xAnimation 0.5s ease",
        },

        "input[type='checkbox']:checked + .custom-box::before": {
          transform: "translate(0rem, 0rem) rotate(90deg)",
          animation: "xAnimationBefore 0.5s ease",
        },

        "input[type='checkbox']:checked + .custom-box::after": {
          transform: "translate(0rem, 0rem) rotate(0deg)",
          animation: "xAnimationAfter 0.5s ease",
        },

        // animation when unchecked
        "input[type='checkbox']:not(:checked) + .custom-box": clicked
          ? {
              transform: "translate(0rem, 0rem) rotate(0deg)",
              animation: "animation 0.5s ease",
              transition: "0.2s ease",
            }
          : { transform: "translate(0rem, 0rem) rotate(0deg)" },

        "input[type='checkbox']:not(:checked) + .custom-box::before": clicked
          ? {
              transform: "translate(0rem, 1rem) rotate(0deg)",
              animation: "animationBefore 0.5s ease",
              transition: "0.2s ease",
            }
          : { transform: "translate(0rem, 1rem) rotate(0deg)" },

        "input[type='checkbox']:not(:checked) + .custom-box::after": clicked
          ? {
              transform: "translate(0rem, 2rem)",
              animation: "animationAfter 0.5s ease",
              transition: "0.2s ease",
            }
          : { transform: "translate(0rem, 2rem)" },

        //hovers for when checked
        ":hover input[type='checkbox']:checked + .custom-box": {
          backgroundColor: "primary.light",
          transition: "0.2s ease",
        },

        ":hover input[type='checkbox']:checked + .custom-box::before": {
          backgroundColor: "primary.light",
          transition: "0.2s ease",
        },
        ":hover input[type='checkbox']:checked + .custom-box::after": {
          backgroundColor: "primary.light",
          transition: "0.2s ease",
        },
      }}
    >
      {/* Hidden checkbox */}
      <Box
        component={"input"}
        type="checkbox"
        onChange={handleChange}
        sx={{
          opacity: 0, // Hide the checkbox
          width: "100%",
          height: "100%",
          position: "absolute",
          cursor: "pointer",
        }}
      />

      {/* Custom checkbox */}
      <Box
        className="custom-box"
        sx={{
          position: "absolute",
          width: "100%",
          height: "0.3rem",
          borderRadius: "20px",
          left: "0.25rem",
          top: "0.45rem",
          backgroundColor: "info.contrastText",
          transition: "0.2s ease",

          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "0.3rem",
            backgroundColor: "info.contrastText",
            borderRadius: "20px",
            transition: "0.2s ease",
          },
        }}
      ></Box>
    </Box>
  );
}
