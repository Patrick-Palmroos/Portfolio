import CSS from "csstype";

export const projectTabStyle: CSS.Properties = {
  content: '""',
  borderRadius: "20px",
  width: "60%",
  height: "70%",
  backgroundColor: "primary.light",
  position: "fixed",
  left: "20%",
  top: "20%",
  zIndex: 9999,
};

export const exitButtonStyle: CSS.Properties = {
  position: "absolute",
  width: "5rem",
  height: "5rem",
  backgroundColor: "#5a1a92",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  right: "-1rem",
  top: "-1rem",
  zIndex: 1,
};
