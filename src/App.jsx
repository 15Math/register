import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import FormEmail from './components/FormEmail/FormEmail';
import FormEmailAutentic from "./components/FormEmailAutentic/FormEmailAutentic";
import './index.css';

function App() {
  return (

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FormEmail />} />
          <Route path="/emailAuntentic" element={<FormEmailAutentic />} />
        </Routes>
      </Router>
  );
}

export default App;
