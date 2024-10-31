import { Stack, Typography, Box } from "@mui/material";
import { titleStyle, lineStyle } from "./TitleStyle";
import { useMediaQuery } from "react-responsive";

export default function Title({
  title,
  line = true,
}: {
  title: string;
  line?: boolean;
}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 780px)" });
  return (
    <div>
      <Stack
        direction={isDesktop ? "row" : "column"}
        paddingTop={5}
        marginBottom={isDesktop ? "0rem" : "-1rem"}
        alignItems={"center"}
      >
        <Typography
          variant="h1"
          sx={
            isDesktop ? { ...titleStyle } : { ...titleStyle, fontSize: "9vw" }
          }
        >
          {title}
        </Typography>
        {line ? (
          <Box
            sx={
              isDesktop
                ? { ...lineStyle }
                : {
                    ...lineStyle,
                    width: "80vw",
                    height: "0.2rem",
                    marginTop: "0.3rem",
                    backgroundImage:
                      "linear-gradient(to right, transparent 0%, #B985FC 50%, transparent 100%)",
                  }
            }
          />
        ) : null}
      </Stack>
    </div>
  );
}
