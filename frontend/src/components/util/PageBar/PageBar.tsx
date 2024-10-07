import { Stack, Box, Typography } from "@mui/material";

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
        <Typography variant="h1">
          {page}/{pageCount}
        </Typography>
      </Stack>
    </div>
  );
}
