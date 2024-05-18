import {Box, Button, Modal, Typography} from "@mui/material";
import * as React from "react";

const style = {
  textAlign: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal = () => {
  const [openModal, setOpen] = React.useState(true);

  const handleOpenModal = () => setOpen(true);

  const handleCloseModal = () => setOpen(false);
  return <div>
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 5 }}>
          Для продолжения нужно авторизоваться
        </Typography>
        <Button variant="contained" onClick={handleCloseModal} fullWidth>Авторизоваться</Button>
      </Box>
    </Modal>
  </div>
}

export default LoginModal;