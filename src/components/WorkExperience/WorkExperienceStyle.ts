import CSS from "csstype";

export const container: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "5rem",
};

export const detailBox: CSS.Properties = {
  height: "31rem",
  width: "29rem",
  right: "12rem",
  borderRadius: "20px",
  boxShadow: "inset 0 0 10px 3px rgba(0, 0, 0, 0.75)",
  border: "solid transparent",
  borderWidth: "4px 5px",
  background:
    "linear-gradient(#27242E, #27242E) padding-box, linear-gradient(to right, #FF74D0, #B985FC) border-box",
  marginTop: "-5.5rem",
  padding: "1.5rem",
};

export const lineStyle: CSS.Properties = {
  backgroundColor: "info.contrastText",
  width: "0.25rem",
  marginTop: "0.5rem",
  marginBottom: "1rem",
  height: "3rem",
  borderRadius: "2rem",
};

export const pointerLine: CSS.Properties = {
  position: "absolute",
  width: "0.3rem",
  bottom: "8rem",
  backgroundColor: "primary.light",
};

export const subLineStyle: CSS.Properties = {
  position: "absolute",
  content: '""',
  width: "0.3rem",
  height: "0.3rem",
  backgroundColor: "primary.light",
};
