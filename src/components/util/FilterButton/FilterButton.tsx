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
          width: isMobile ? "11rem" : isVeryTiny ? "9rem" : "7rem",
          height: isMobile ? "5rem" : isVeryTiny ? "4rem" : "3rem",
          marginBottom: "1rem",
          border: "none",
          borderRadius: "20px",
          backgroundColor: "#914180",
          zIndex: 1,
          transition: "0.2s ease",

          "&::before": {
            content: '""',
            position: "absolute",
            left: "0rem",
            top: active ? "0rem" : "-0.5rem",
            height: "100%",
            width: "100%",
            borderRadius: "20px",
            backgroundColor: active ? "#914180" : "info.contrastText",
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
            top: active ? "0rem" : "-0.5rem",
            transition: "0.2s ease",
            fontSize: isMobile ? "2rem" : isVeryTiny ? "1.8rem" : "1.4rem",
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
}
