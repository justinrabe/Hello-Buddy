import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import LandingPage from './Components/LandingPage';
//import Sidebar from './Components/Sidebar';
import './App.css';
function App() {
  return (
    <div className="App">
        <Router>
          <div className="app-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;