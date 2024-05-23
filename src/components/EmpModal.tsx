import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { CreateEmployee, ModifyEmployee } from "../api/employee";
import { useDispatch, useSelector } from "react-redux";
import { isEditMode, selectedEmployee } from "../store/dataSlice";
import { RootState } from "../store/store";
import { empModalStyle } from "../shared/styles";
import { employeeT } from "../types/types";


const EmpModal = (
  {openModal, setOpen}: {openModal: boolean, setOpen: (val: boolean) => void}
) => {
  const selectedEmp = useSelector((state: RootState) => state.data.selectedEmployee);
  const editMode = useSelector((state: RootState) => state.data.isEditMode);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset
  } = useForm<employeeT>();

  useEffect(() => {
    if (editMode) {
      reset(selectedEmp)
    } else {
      reset({})
    }
  }, [selectedEmp]);


  const handleCloseModal = () => {
    dispatch(isEditMode(false));
    dispatch(selectedEmployee({}));
    setOpen(false);
    reset({});
  }

  const onSubmit = (emp: employeeT) => {
    if (!editMode) {
      CreateEmployee(emp, dispatch);
    } else {
      ModifyEmployee(emp, dispatch);
    }
    handleCloseModal();
  }

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={empModalStyle} onSubmit={handleSubmit(onSubmit)}>
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
        <Typography color="gray" textAlign="left" variant="caption">* - обязательные поля</Typography>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{mt: 2}}
        >
          {
            !editMode
              ? 'Создать'
              : 'Изменить'
          }
        </Button>
      </Box>
    </Modal>
  )
}

export default EmpModal;