import CSS from "csstype";

export const backgroundBox: CSS.Properties = {
  height: "33rem",
  maxWidth: "90rem",
  width: "95%",
  margin: "0px 3rem 0px 2rem",
  position: "relative",
  boxShadow: "1rem -0.6rem 0px 0px #FF74D0",
  overflow: "hidden",
  borderRadius: "10px",
  backgroundColor: "primary.main",
  zIndex: 0,
};

export const circle: CSS.Properties = {
  position: "absolute",
  width: "35.5rem",
  height: "35.5rem",
  backgroundColor: "primary.main",
  borderRadius: "50%",
  right: "-18rem",
  bottom: "-22rem",
  boxShadow: "-0.45rem 0.5rem 0.9rem rgb(0 0 0 / 7%)",
  overflow: "hidden",
  zIndex: 1,
};

export const pfpStyle: CSS.Properties = {
  position: "absolute",
  right: "2rem",
  bottom: "1rem",
  width: "32rem",
  height: "auto",
  zIndex: 2,
};

export const logoStyle: CSS.Properties = {
  position: "absolute",
  width: "39.8rem",
  left: "0.5rem",
  bottom: "0rem",
  zIndex: -3,
};

export const titleBox: CSS.Properties = {
  position: "relative",
  backgroundColor: "color(srgb 0 0 0 / 0.6)",
  padding: "1rem",
  paddingRight: "2rem",
  width: "40vw",
  left: "-3rem",
  top: "0",
  zIndex: 4,
};
