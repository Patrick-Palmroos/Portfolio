import CSS from "csstype";

export const container: CSS.Properties = {
  position: "relative",
  height: "20rem",
};

export const carouselContainer: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "30rem 30rem",
  gridTemplateRows: "auto auto",
  rowGap: "3.5rem",
  columnGap: "2.5rem",
};

export const buttonStyle: CSS.Properties = {
  margin: "15px",
};

export const emptyBoxStyle: CSS.Properties = {
  width: "30.25rem",
  height: "14.4rem",
};
