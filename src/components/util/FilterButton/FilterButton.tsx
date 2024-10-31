import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function FilterButton({
  title,
  active = false,
  callback,
}: {
  title: string;
  active?: boolean;
  callback: () => void;
}) {
  const isMobile = useMediaQuery({ query: "(min-width: 730px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });

  return (
    <div>
      <Box
        component={"button"}
        onClick={callback}
        sx={{
          position: "relative",
          width: isMobile ? "10rem" : isVeryTiny ? "9rem" : "7rem",
          height: isMobile ? "4rem" : isVeryTiny ? "4rem" : "3rem",
          marginBottom: "1.4rem",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#733976",
          zIndex: 1,
          transition: "0.2s ease",

          "&::before": {
            content: '""',
            position: "absolute",
            left: "0rem",
            top: active ? "0rem" : "-0.5rem",
            height: "89.5%",
            width: isMobile ? "96%" : isVeryTiny ? "96%" : "94.5%",
            borderRadius: "10px",
            border: "solid transparent",
            borderWidth: "0.2rem",
            background:
              "linear-gradient(#1e1d28, #1e1d28) padding-box, linear-gradient(to right, #FF74D0, #B985FC) border-box",
            //backgroundColor: active ? "#914180" : "info.contrastText",
            zIndex: 2,
            transition: "0.2s ease",
          },
        }}
      >
        <Typography
          variant="h1"
          zIndex={3}
          position={"relative"}
          sx={{
            color: active ? "#9effb0" : "white",
            top: active ? "0rem" : "-0.5rem",
            transition: "0.2s ease",
            fontSize: isMobile ? "1.8rem" : isVeryTiny ? "1.8rem" : "1.4rem",
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
}
