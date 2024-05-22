import * as React from "react";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import LoginModal from "../components/LoginModal";
import CircularLoader from "../components/CircularLoader";
import LoginForm from "../components/LoginForm";


const SignIn: React.FC = () => {
  const [openModal, setOpen] = React.useState(true);
  const loading = useSelector((state: RootState) => state.data.isLoading);

  if (loading) return <CircularLoader />;

  return (
    <Container maxWidth="xs">
      <LoginForm />
      <LoginModal openModal={openModal} setOpen={setOpen} />
    </Container>
  );
}

export default SignIn;
