import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Registered from './pages/Registered';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminow" element={<Admin />} />
        <Route path="/registered" element={<Registered />} />
      </Routes>
    </Router>
  );
}

export default App;