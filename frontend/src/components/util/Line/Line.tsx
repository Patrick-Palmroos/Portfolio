import { Box } from "@mui/material";

export default function Line(maxHeight: number, horizontal?: boolean = true) {
  return (
    <div>
      <Box
        sx={{
          maxHeight: { maxHeight },
          width: "1rem",
          backgroundColor: "red",
        }}
      />
    </div>
  );
}
