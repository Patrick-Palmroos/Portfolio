import { Box } from "@mui/material";

export default function Line({
  maxHeight,
  horizontal = false,
}: {
  maxHeight: string;
  horizontal?: boolean;
}) {
  return (
    <div>
      <Box
        sx={{
          maxHeight: "5rem",
          height: "100vw",
          width: "1rem",
          backgroundColor: "red",
        }}
      />
    </div>
  );
}
