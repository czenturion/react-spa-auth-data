import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { loginModalStyle } from "../shared/styles";


const LoginModal = ({ openModal, setOpen }: { openModal: boolean, setOpen: (val: boolean) => void }) => {
  const handleCloseModal = () => setOpen(false);

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={loginModalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 5 }}>
          Для продолжения нужно авторизоваться
        </Typography>
        <Button variant="contained" onClick={handleCloseModal} fullWidth>Авторизоваться</Button>
      </Box>
    </Modal>
  )
}

export default LoginModal;