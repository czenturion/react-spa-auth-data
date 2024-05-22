import * as React from "react";
import { Box, CircularProgress } from "@mui/material";

const CircularLoader: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
    }}>
      <CircularProgress size="4rem" />
    </Box>
  )
}

export default CircularLoader;
