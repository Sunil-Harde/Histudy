import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; // 1. Import Outlet
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;