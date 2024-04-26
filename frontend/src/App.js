import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import LandingPage from './Components/LandingPage';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import './App.css';
function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;