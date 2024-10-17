import { Box } from "@mui/material";
import SocialBox from "../util/SocialBox/SocialBox";

export default function Socials() {
  return (
    <div>
      <Box
        paddingTop={"2rem"}
        display={"grid"}
        gridTemplateColumns={"auto auto auto auto"}
        gridTemplateRows={"auto auto"}
        justifyContent={"center"}
        gap={"2rem"}
      >
        <SocialBox
          icon="/images/Logos/linkedin.png"
          color1="82, 0, 205"
          color2="0, 153, 200"
          link="https://www.linkedin.com/in/patrick-palmroos-2394b3224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <SocialBox
          icon="/images/Logos/gmail.png"
          color1="116, 0, 198"
          color2="255, 0, 55"
          link="https://mail.google.com/mail/?view=cm&fs=1&to=palmroos.patrick@gmail.com"
        />
        <SocialBox
          icon="/images/Logos/ig.webp"
          color1="255, 174, 52"
          color2="208, 0, 125"
          link="https://www.instagram.com/palmroos.patrick/profilecard/?igsh=MTIyM2I4cXg1bmI3bw%3D%3D"
        />
        <SocialBox
          icon="/images/Logos/github.png"
          color1="180, 0, 204"
          color2="139, 166, 255"
          link="https://github.com/Patrick-Palmroos"
        />
      </Box>
    </div>
  );
}
