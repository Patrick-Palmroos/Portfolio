import { Box } from "@mui/material";
import SocialBox from "../util/SocialBox/SocialBox";

export default function Socials() {
  return (
    <div>
      <Box
        paddingTop={"3rem"}
        display={"grid"}
        gridTemplateColumns={"auto auto"}
        gridTemplateRows={"auto auto"}
        justifyContent={"center"}
        gap={"2rem"}
      >
        <SocialBox
          icon="/images/Logos/linkedin.png"
          color1="82, 0, 205"
          color2="0, 153, 200"
          link="#socials"
        />
        <SocialBox
          icon="/images/Logos/gmail.png"
          color1="116, 0, 198"
          color2="255, 0, 55"
          link="#socials"
        />
        <SocialBox
          icon="/images/Logos/ig.webp"
          color1="255, 174, 52"
          color2="208, 0, 125"
          link="#socials"
        />
        <SocialBox
          icon="/images/Logos/github.png"
          color1="180, 0, 204"
          color2="139, 166, 255"
          link="#socials"
        />
      </Box>
    </div>
  );
}
