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
  background: "linear-gradient(65deg, #978EFF 0%, #C96BC5 50%, #B985FC 100%)",
  zIndex: 2,
};

export const educationBackdrop: CSS.Properties = {
  width: "25rem",
  height: "9rem",
  borderRadius: "20px",
  padding: "1rem",
  background: "rgba(174, 89, 172, 0.5)",
  zIndex: 1,
};

export const imageStyle: CSS.Properties = {
  position: "absolute",
  zIndex: 4,
  height: "9rem",
  right: "0rem",
  top: "2rem",
};
