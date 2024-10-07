import { Stack, Box, Typography } from "@mui/material";
import { pageDisplayBox, selectedDisplayBox } from "./PageBarStyle";

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
        {Array.from({ length: pageCount }).map((x, index) => (
          <Box
            key={index}
            sx={index === page - 1 ? selectedDisplayBox : pageDisplayBox}
          ></Box>
        ))}
      </Stack>
    </div>
  );
}
