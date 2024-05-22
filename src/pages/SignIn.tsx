import * as React from "react";
import { Container } from "@mui/material";
import LoginModal from "../components/LoginModal";
import LoginForm from "../components/LoginForm";


const SignIn: React.FC = () => {
  const [openModal, setOpen] = React.useState(true);

  return (
    <Container maxWidth="xs">
      <LoginForm />
      <LoginModal openModal={openModal} setOpen={setOpen} />
    </Container>
  );
}

export default SignIn;
