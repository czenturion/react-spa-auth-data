import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from "@mui/material";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Copyright from "./components/Copyright";

const App: React.FC = () => {
  return (
    <Container>
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
