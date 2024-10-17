import CSS from "csstype";

export const container: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  paddingTop: "4rem",
  justifyContent: "center",
};

export const educationBox: CSS.Properties = {
  content: '""',
  position: "absolute",
  left: "0.7rem",
  top: "0.5rem",
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
  filter: "drop-shadow(0 4px 4px rgba(153, 140, 251, 1))",
};

export const titleStyle: CSS.Properties = {
  position: "absolute",
  fontSize: "27px",
  color: "#E2FFA6",
  width: "18rem",
  top: "1.7rem",
  left: "2rem",
  zIndex: 3,
};

export const subtitleStyle: CSS.Properties = {
  position: "absolute",
  left: "2rem",
  fontSize: "22px",
  zIndex: 3,
};
