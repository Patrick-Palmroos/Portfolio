import CSS from "csstype";

export const container: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  justifyContent: "space-evenly",
};

export const educationBox: CSS.Properties = {
  content: '""',
  position: "absolute",
  left: "1rem",
  top: "1rem",
  width: "25rem",
  height: "9rem",
  borderRadius: "20px",
  padding: "1rem",
  background: "blue",
  zIndex: 2,
};

export const educationBackdrop: CSS.Properties = {
  width: "25rem",
  height: "9rem",
  borderRadius: "20px",
  padding: "1rem",
  background: "red",
  zIndex: 1,
};
