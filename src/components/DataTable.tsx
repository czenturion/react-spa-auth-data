import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { employeeT } from "../store/dataSlice";

type propsT = {
  employees: employeeT[] | null
}

const DataTable: React.FC<propsT> = ({ employees }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№ Сотрудника</TableCell>
            <TableCell>Название документа</TableCell>
            <TableCell>Тип документа</TableCell>
            <TableCell>Статус документа</TableCell>
            <TableCell>Дата подписи компании</TableCell>
            <TableCell>Подписи компании</TableCell>
            <TableCell>Дата подписи сотрудником</TableCell>
            <TableCell>Подпись сотрудником</TableCell>
            <TableCell>Изменить</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees
            ? employees.map((row) => (
              <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {row.employeeNumber}
                </TableCell>
                <TableCell>{row.documentName}</TableCell>
                <TableCell>{row.documentType}</TableCell>
                <TableCell>{row.documentStatus}</TableCell>
                <TableCell>{row.companySigDate.slice(0, 10)}</TableCell>
                <TableCell>{row.companySignatureName}</TableCell>
                <TableCell>{row.employeeSigDate.slice(0, 10)}</TableCell>
                <TableCell>{row.employeeSignatureName}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete">
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
            : <></>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
