import { Box, Typography } from "@mui/material";

export default function ContactButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
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
            width: "12rem",
            height: "3.5rem",
            borderRadius: "15px",

            zIndex: 3,
            background: "black",

            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1,
              borderRadius: "15px",
              top: "-1rem",
              left: "0rem",
              background: "red",
            },
          }}
        >
          <Typography
            position={"relative"}
            zIndex={3}
            sx={{
              top: "-1rem",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
