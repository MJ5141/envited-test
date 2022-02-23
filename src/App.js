import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import AddEvent from './components/AddEvent';
import Navbar from './components/layouts/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<AddEvent />} />
      </Routes> 
    </div>
  );
}

export default App;
