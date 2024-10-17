import CSS from "csstype";

export const projectBoxStyle: CSS.Properties = {
  position: "relative",
  backgroundColor: "color(srgb 0.73 0.53 0.99 / 0.5)",
  borderRadius: "20px",
  width: "30.25rem",
  height: "14.4rem",
  cursor: "pointer",
  border: "none",
  transition: "0.2s ease",
  WebkitTapHighlightColor: "transparent",
};

export const imageStyle: CSS.Properties = {
  position: "absolute",
  right: "0rem",
  top: "1rem",
  height: "13rem",
  transition: "0.55s ease",
  zIndex: 3,
};

export const titleStyle: CSS.Properties = {
  color: "#E2FFA6",
  fontSize: "40px",
  paddingLeft: "1rem",
  paddingTop: "0.7rem",
  textShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
  transition: "0.4s ease",
  zIndex: 3,
};

export const subtitleStyle: CSS.Properties = {
  color: "common.white",
  fontSize: "18px",
  width: "310px",
  paddingLeft: "1rem",
  textAlign: "start",
  textShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
  transition: "0.4s ease",
  zIndex: 3,
};

export const logoStyle: CSS.Properties = {
  marginTop: "-0.4rem",
  height: "2.2rem",
  paddingRight: "0.5rem",
  filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5))",
  transition: "0.4s ease",
  zIndex: 3,
};
