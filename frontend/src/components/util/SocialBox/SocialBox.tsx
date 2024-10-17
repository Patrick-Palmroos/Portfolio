import { Box } from "@mui/material";

export default function SocialBox(
  icon: string,
  color1: string,
  color2: string,
  link: string
) {
  return (
    <div>
      <Box
        component={"a"}
        href={link}
        sx={{
          background: `linear-gradient(${color1}, ${color2})`,
        }}
      >
        <img src={icon} alt="icon" style={{ width: "50%" }} />
      </Box>
    </div>
  );
}
