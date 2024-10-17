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
          color1="red"
          color2="green"
          link="#socials"
        />
        <SocialBox
          icon="/images/Logos/linkedin.png"
          color1="red"
          color2="green"
          link="#socials"
        />
        <SocialBox
          icon="/images/Logos/linkedin.png"
          color1="red"
          color2="green"
          link="#socials"
        />
        <SocialBox
          icon="/images/Logos/linkedin.png"
          color1="red"
          color2="green"
          link="#socials"
        />
      </Box>
    </div>
  );
}
