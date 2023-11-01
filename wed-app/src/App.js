import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;