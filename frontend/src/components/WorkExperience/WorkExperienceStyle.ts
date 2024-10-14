import CSS from "csstype";

export const container: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "3rem",
};

export const detailBox: CSS.Properties = {
  height: "30rem",
  width: "29rem",
  right: "12rem",
  borderRadius: "20px",
  marginTop: "1rem",
  padding: "1.5rem",
  backgroundColor: "red",
};

export const lineStyle: CSS.Properties = {
  backgroundColor: "info.contrastText",
  width: "0.25rem",
  marginTop: "0.5rem",
  marginBottom: "1rem",
  height: "3rem",
  borderRadius: "2rem",
};
