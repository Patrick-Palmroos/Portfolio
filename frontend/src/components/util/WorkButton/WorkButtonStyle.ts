import CSS from "csstype";

export const buttonStyle: CSS.Properties = {
  border: "none",
  position: "relative",
  cursor: "pointer",
  backgroundColor: "#914180",
  borderRadius: "20px",
  zIndex: 1,
};

export const psuedoElemet: CSS.Properties = {
  content: '""',
  position: "absolute",
  top: "-0.6rem",
  left: "0px",
  backgroundColor: "info.contrastText",
  borderRadius: "20px",
  zIndex: 2,
};

export const childStyle: CSS.Properties = {
  zIndex: 3,
  position: "absolute",
  top: "0rem",
  left: "1rem",
};
