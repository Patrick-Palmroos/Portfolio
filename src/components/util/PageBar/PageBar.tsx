import { Stack, Box } from "@mui/material";
import { pageDisplayBox, selectedDisplayBox, lineStyle } from "./PageBarStyle";
import { useMediaQuery } from "react-responsive";

export default function PageBar({
  page,
  pageCount,
}: {
  page: number;
  pageCount: number;
}) {
  const isMobile = useMediaQuery({ query: "(min-width: 550px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });

  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={isMobile ? "0rem" : isVeryTiny ? "-2rem" : "-5rem"}
        sx={
          isVeryTiny
            ? null
            : {
                background: "rgba(0,0,0,0.3)",
                padding: "0.2rem 0.2rem 0.2rem 0.2rem",
                width: "10rem",
                borderRadius: "20px",
              }
        }
      >
        <Box
          sx={
            isMobile
              ? {
                  ...lineStyle,
                  rotate: "180deg",
                }
              : null
          }
        />
        {Array.from({ length: pageCount }).map((_, index) => (
          <Box
            zIndex={5}
            key={index}
            sx={
              index === page - 1
                ? isMobile
                  ? { ...selectedDisplayBox }
                  : isVeryTiny
                  ? { ...selectedDisplayBox, width: "1.5rem" }
                  : {
                      ...selectedDisplayBox,
                      width: "1rem",
                      height: "0.65rem",
                      margin: "0.3rem 0.2rem 0.3rem 0.2rem",
                    }
                : isMobile
                ? { ...pageDisplayBox }
                : isVeryTiny
                ? { ...pageDisplayBox, width: "1rem" }
                : {
                    ...pageDisplayBox,
                    width: "0.7rem",
                    height: "0.7rem",
                    margin: "0.3rem 0.2rem 0.3rem 0.2rem",
                    backgroundColor: "#868686",
                  }
            }
          />
        ))}
        <Box sx={isMobile ? { ...lineStyle } : null} />
      </Stack>
    </div>
  );
}
