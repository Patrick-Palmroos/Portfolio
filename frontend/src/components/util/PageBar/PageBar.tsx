import { Stack, Box } from "@mui/material";
import { pageDisplayBox, selectedDisplayBox, lineStyle } from "./PageBarStyle";

export default function PageBar({
  page,
  pageCount,
}: {
  page: number;
  pageCount: number;
}) {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"}>
        <Box
          sx={{
            ...lineStyle,
            rotate: "180deg",
          }}
        />
        {Array.from({ length: pageCount }).map((x, index) => (
          <Box
            key={index}
            sx={index === page - 1 ? selectedDisplayBox : pageDisplayBox}
          />
        ))}
        <Box sx={lineStyle} />
      </Stack>
    </div>
  );
}
