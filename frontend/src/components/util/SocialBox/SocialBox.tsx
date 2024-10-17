import { Box } from "@mui/material";

export default function SocialBox({
  icon,
  color1,
  color2,
  link,
}: {
  icon: string;
  color1: string;
  color2: string;
  link: string;
}) {
  return (
    <div>
      <Box
        component={"a"}
        href={link}
        sx={{
          textDecoration: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <img
          src={icon}
          alt="icon"
          style={{
            position: "relative",
            background: `linear-gradient(to top right, ${color1}, ${color2})`,
            padding: "1rem",
            width: "5rem",
            height: "5rem",
          }}
        />
      </Box>
    </div>
  );
}
