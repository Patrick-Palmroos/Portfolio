import CSS from "csstype";

export const container: CSS.Properties = {
  position: "relative",
  height: "20rem",
};

export const carouselContainer: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "30rem 30rem",
  gridTemplateRows: "auto auto",
  rowGap: "2.5rem",
  columnGap: "2.5rem",
  padding: "1.5rem 1.5rem 1.5rem 1.5rem",
  borderRadius: "20px",
  overflow: "hidden",
};

export const emptyBoxStyle: CSS.Properties = {
  width: "30.25rem",
  height: "14.4rem",
};
