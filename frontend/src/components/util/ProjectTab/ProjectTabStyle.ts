import CSS from "csstype";

export const projectTabStyle: CSS.Properties = {
  content: '""',
  borderRadius: "20px",
  width: "60%",
  height: "70%",
  position: "fixed",
  border: "0.5rem solid transparent",
  background:
    "linear-gradient(#27242E, #27242E) padding-box, linear-gradient(to right, #FF74D0, #5a51ff) border-box",
  left: "20%",
  top: "15%",
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
  right: "-2rem",
  top: "-2rem",
  zIndex: 4,
};

export const imageStyle: CSS.Properties = {
  position: "relative",
  width: "9rem",
  height: "auto",
  padding: "0rem 1rem 0rem 2rem",
  margin: "0rem 1rem 0rem 1rem",
  zIndex: 3,
};

export const titleStyle: CSS.Properties = {
  fontSize: "50px",
  color: "primary.contrastText",
  zIndex: 1,
};

export const dateTextStyle: CSS.Properties = {
  fontSize: "30px",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: "#b5afb4",
  zIndex: 1,
};

export const iconStyle: CSS.Properties = {
  paddingTop: "1rem",
  paddingRight: "0.5rem",
  filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5))",
  height: "4rem",
  width: "auto",
  zIndex: 1,
};

export const textStyle: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  fontSize: "25px",
  margin: "0rem 3rem 0rem 3rem",
  width: "70%",
  zIndex: 3,
};
