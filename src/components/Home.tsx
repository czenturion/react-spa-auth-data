import React from "react";
import { useEffect } from "react";
import { DataAPI } from "../api/employee";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setEmployees } from "../store/dataSlice";
import { removeToken } from "../store/authSlice";
import {
  Container,
  Stack,
  Button,
} from "@mui/material";
import DataTable from "./DataTable";
import Toolbar from "./Toolbar";

const Home = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.data.employees)
  // const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    DataAPI.getData().then(res => {
      dispatch(setEmployees(res.data));
    });
  }, []);

  return (
    <Container sx={{ minHeight: "80vh" }}>
      <Toolbar />
      <DataTable employees={employees} />
    </Container>
  )
}

export default withAuthRedirect(Home);
