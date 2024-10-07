import { Stack, Box } from "@mui/material";

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
        {page}/{pageCount}
      </Stack>
    </div>
  );
}
