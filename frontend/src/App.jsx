import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import FormEmail from './components/EmailForm/EmailForm';
import FormEmailAutentic from "./components/EmailAutenticForm/EmailAutenticForm";
import PasswordForm from "./components/PasswordForm/PasswordForm";
import './index.css';

function App() {
  return (

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FormEmail />} />
          <Route path="/emailAuntentic" element={<FormEmailAutentic />} />
          <Route path="/passwordForm" element={<PasswordForm />} />
        </Routes>
      </Router>
  );
}

export default App;
