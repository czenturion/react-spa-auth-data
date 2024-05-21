import React from "react";
import { useEffect } from "react";
import { DataRequest } from "../api/employee";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Container } from "@mui/material";
import DataTable from "./DataTable";
import Toolbar from "./Toolbar";
import EmpModal from "./EmpModal";
import {isLoading} from "../store/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const [openModal, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    dispatch(isLoading(true));
    DataRequest(token, dispatch);
  }, []);

  return (
    <Container disableGutters sx={{ minHeight: "80vh" }}>
      <Toolbar setOpen={setOpen} />
      <DataTable setOpen={setOpen} />
      <EmpModal openModal={openModal} setOpen={setOpen} />
    </Container>
  )
}

export default withAuthRedirect(Home);
