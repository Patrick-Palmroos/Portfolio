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
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        marginTop={isMobile ? "0rem" : "-2rem"}
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
            key={index}
            sx={
              index === page - 1
                ? isMobile
                  ? { ...selectedDisplayBox }
                  : { ...selectedDisplayBox, width: "1.5rem" }
                : isMobile
                ? { ...pageDisplayBox }
                : { ...pageDisplayBox, width: "1rem" }
            }
          />
        ))}
        <Box sx={isMobile ? { ...lineStyle } : null} />
      </Stack>
    </div>
  );
}
