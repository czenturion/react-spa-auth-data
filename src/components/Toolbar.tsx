import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../store/authSlice";
import { isLoading, removeEmployees } from "../store/dataSlice";
import { Button, Stack } from "@mui/material";

const Toolbar = ({ setOpen }: { setOpen: (val: boolean) => void }) => {

  const dispatch = useDispatch();

  const onAddEmployee = () => {
    setOpen(true);
  }

  const onLogout = () => {
    dispatch(removeToken());
    dispatch(removeEmployees());
    dispatch(isLoading(false));
  }

  return (
    <Stack direction="row" spacing={2} margin="normal" sx={{ justifyContent: "flex-end", mt: 2, mb: 2 }}>
      <Button variant="contained" onClick={onAddEmployee}>Создать +</Button>
      <Button variant="outlined" color="warning" onClick={onLogout}>Выйти</Button>
    </Stack>
  )
}

export default Toolbar;
