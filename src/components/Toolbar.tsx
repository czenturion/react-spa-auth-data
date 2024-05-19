import { Button, Stack } from "@mui/material";
import React from "react";
import { removeToken } from "../store/authSlice";
import { useDispatch } from "react-redux";

const Toolbar = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(removeToken());
  }

  return (
    <Stack direction="row" spacing={2} margin="normal" sx={{ justifyContent: "flex-end", mt: 2, mb: 2 }}>
      <Button variant="contained">Создать +</Button>
      <Button variant="outlined" color="warning" onClick={onLogout}>Выйти</Button>
    </Stack>
  )
}

export default Toolbar;
