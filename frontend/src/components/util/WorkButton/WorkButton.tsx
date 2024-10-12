import { Box } from "@mui/material";
import { Work } from "../Interfaces";

export default function WorkButton({
  width,
  height,
  work,
}: {
  width: number;
  height: number;
  work: Work;
}) {
  return (
    <div>
      <Box>
        <h2>{work.name}</h2>
      </Box>
    </div>
  );
}
