import CSS from "csstype";

export const pageDisplayBox: CSS.Properties = {
  width: "2.1rem",
  height: "0.8rem",
  borderRadius: "1rem",
  backgroundColor: "gray",
  transition: "0.4s ease",
  margin: "0.3rem 0.3rem 0.3rem 0.3rem",
};

export const selectedDisplayBox: CSS.Properties = {
  width: "2.1rem",
  height: "0.8rem",
  borderRadius: "1rem",
  backgroundColor: "white",
  transition: "0.2s ease",
  margin: "0.3rem 0.3rem 0.3rem 0.3rem",
  transform: "scaleY(1.2) scaleX(1.1)",
};

export const lineStyle: CSS.Properties = {
  position: "relative",
  marginLeft: "1rem",
  marginRight: "1rem",
  width: "25vw",
  height: "0.3rem",
  borderRadius: "1rem",
  backgroundImage:
    "linear-gradient(to right, #B985FC 27%, rgba(0 0 0 / 0%) 100%)",
};
