import CSS from "csstype";

export const container: CSS.Properties = {
  position: "relative",
  height: "20rem",
};

export const carouselContainer: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "20rem 20rem",
  gridTemplateRows: "auto auto",
  gap: "2rem",
};

export const buttonStyle: CSS.Properties = {};

export const emptyBoxStyle: CSS.Properties = {
  width: "7rem",
  height: "7rem",
};
