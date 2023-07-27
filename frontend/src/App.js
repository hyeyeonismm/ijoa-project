import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthPage from "./pages/AuthPage";
import IdAuthPage from "./pages/IdAuthPage";
import CrimeAuthPage from "./pages/CrimeAuthPage";
import AcademicAuthPage from "./pages/AcademicAuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/idauth" element={<IdAuthPage />} />
        <Route path="/criminalauth" element={<CrimeAuthPage />} />
        <Route path="/academicauth" element={<AcademicAuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
