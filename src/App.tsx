import { Routes, Route, Router } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import People from './components/people'
import Home from './components/home'

function App() {
  return (
    
    <div className="App">
        
      <Routes>
         
         <Route path="/" element={<Home />}/>
         <Route path="/people" element={<People />} />

       </Routes>
    </div>
  );
}

export default App;
