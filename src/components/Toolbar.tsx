import React from "react";
import { Button, Stack } from "@mui/material";
import { removeToken } from "../store/authSlice";
import { useDispatch } from "react-redux";
import EmpAddModal from "./EmpAddModal";

const Toolbar = () => {
  const [openModal, setOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const onAddEmployee = () => {
    setOpen(true);
  }

  const onLogout = () => {
    dispatch(removeToken());
  }

  return (
    <Stack direction="row" spacing={2} margin="normal" sx={{ justifyContent: "flex-end", mt: 2, mb: 2 }}>
      <Button variant="contained" onClick={onAddEmployee}>Создать +</Button>
      <Button variant="outlined" color="warning" onClick={onLogout}>Выйти</Button>
      <EmpAddModal openModal={openModal} setOpen={setOpen} />
    </Stack>
  )
}

export default Toolbar;
