import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}

export default App;
