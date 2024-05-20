import * as React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { employeeT } from "../store/dataSlice";
import { CreateEmployee } from "../api/employee";
import { useDispatch } from "react-redux";

const style = {
  textAlign: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 1,
  boxShadow: 24,
  maxWidth: 400,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  p: 4,
  '&:active': {
    border: 'none',
    outline: 'none',
  },
  '&:focus': {
    border: 'none',
    outline: 'none',
  }
};

const EmpAddModal = ({openModal, setOpen}: {openModal: boolean, setOpen: (val: boolean) => void}) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm<employeeT>();
  const dispatch = useDispatch();

  const handleCloseModal = () => setOpen(false);

  const onSubmit = (emp: employeeT) => {
    CreateEmployee(emp, dispatch);
    handleCloseModal();
    reset();
  }

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={style} onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={handleCloseModal}>Закрыть</Button>
        <TextField
          {...register("employeeNumber", {required: true})}
          id="employeeNumber"
          label="№ Сотрудника *"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("documentName", {required: true})}
          id="documentName"
          label="Название документа *"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("documentType")}
          id="documentType"
          label="Тип документа"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("documentStatus", {required: true})}
          id="documentStatus"
          label="Статус документа *"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("companySignatureName")}
          id="companySignatureName"
          label="Подпись компании"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("employeeSignatureName")}
          id="employeeSignatureName"
          label="Подпись сотрудника"
          variant="standard"
          fullWidth
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Создать
        </Button>
      </Box>
    </Modal>
  )
}

export default EmpAddModal;