import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/idauth" element={<IdAuth />} />
        <Route path="/criminalauth" element={<CriminalAuth />} />
        <Route path="/academicauth" element={<AcademicAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
