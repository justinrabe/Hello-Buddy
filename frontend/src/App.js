import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import LandingPage from './Components/LandingPage';
import CookieContext from './Components/CookieContext';
import './App.css';
function App() {
  const [cookie, setCookie] = useState(null);
  return (
    <div className="App">
      <CookieContext.Provider value={{ cookie, setCookie }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </CookieContext.Provider>
    </div>
  );
}

export default App;