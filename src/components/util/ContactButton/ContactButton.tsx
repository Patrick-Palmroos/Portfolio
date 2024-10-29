import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function ContactButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  return (
    <div>
      <Box
        component={"a"}
        href={link}
        sx={{
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            textDecoration: "none",
            position: "relative",
            alignContent: "center",
            textAlign: "center",
            width: isDesktop ? "15rem" : "12rem",
            height: isDesktop ? "3.8rem" : "3rem",
            borderRadius: "15px",
            boxShadow: "0px 2px 6px 3px #00000080",
            zIndex: 3,
            background: "#2CD8A4",

            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1,
              borderRadius: "15px",
              top: "-1rem",
              left: "0rem",
              background: "#95ff85",
              boxShadow: "0px -2px 0px white",
              transition: "0.4s ease",
            },

            ":hover::before": {
              transform: "translateY(0.2rem)",
              transition: "0.4s ease",
            },
            ":hover .text": {
              transform: "translateY(0.2rem)",
              transition: "0.4s ease",
            },

            ":active::before": {
              transform: "translateY(0.8rem)",
              transition: "0.2s ease",
            },

            ":active .text": {
              transform: "translateY(0.8rem)",
              transition: "0.2s ease",
            },
          }}
        >
          <Typography
            className="text"
            position={"relative"}
            zIndex={3}
            sx={{
              top: "-1rem",
              fontSize: isDesktop ? "1.5rem" : "1.15rem",
              color: "white",
              textShadow: "0px 1px 10px rgba(0, 0, 0, 0.5)",
              transition: "0.4s ease",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
