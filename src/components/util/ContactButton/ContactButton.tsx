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
        sx={{ width: "2rem", height: "2rem", background: "red" }}
      ></Box>
    </div>
  );
}
