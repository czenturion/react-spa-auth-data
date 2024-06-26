import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Copyright from "./components/Copyright";

const App: React.FC = () => {
  return (
    <Container component="main">
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default App;
