import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit"
            href="https://github.com/czenturion"
            target="_blank"
      >
        github.com/czenturion
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}