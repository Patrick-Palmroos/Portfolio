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
  padding: "1.5rem 1.5rem 1.5rem 1.5rem",
  borderRadius: "20px",
  boxShadow: "inset 0 0 10px 2px rgba(0, 0, 0, 0.4)",
};

export const buttonStyle: CSS.Properties = {
  margin: "15px",
};

export const emptyBoxStyle: CSS.Properties = {
  width: "30.25rem",
  height: "14.4rem",
};
