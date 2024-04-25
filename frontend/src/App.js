import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import LandingPage from './Components/LandingPage';
import Sidebar from './Components/Sidebar';
import './App.css';
function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<div>WIP!</div>} />
        </Routes>
    </div>
  );
}

export default App;