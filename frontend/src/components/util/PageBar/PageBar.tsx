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
      <Stack direction={"row"}>
        {Array.from({ length: pageCount }).map((x, index) => (
          <Box
            key={index}
            sx={{
              pageDisplayBox,
            }}
          ></Box>
        ))}
      </Stack>
    </div>
  );
}
