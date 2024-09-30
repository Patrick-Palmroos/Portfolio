import { useState } from "react";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Header from "./components/Header.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box component={"section"}>
      <div>
        <Header />
      </div>
    </Box>
  );
}

export default App;
