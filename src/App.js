import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ProductsPage from './components/ProductsPage';
import HomeFR from './components/HomeFR';
import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className='content'>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Product" element={<ProductsPage />} />
                <Route path="/HomeFR" element={<HomeFR />} />
        </Routes>
      </div>
    </div>
    </Router>

  );
}

export default App;
