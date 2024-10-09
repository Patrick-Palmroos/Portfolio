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
          maxHeight: "48rem",
          marginRight: "1rem",
          marginLeft: "1rem",
          height: "100vw",
          width: "0.3rem",
          background: "linear-gradient(transparent, #B985FC, transparent)",
        }}
      />
    </div>
  );
}
