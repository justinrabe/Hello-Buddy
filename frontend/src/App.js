import React from 'react';
import Chat from '../src/Components/Chat'; // adjust the path if necessary
import StartChat from './Components/StartChat';

function App() {
  return (
    <div className="App">
      <StartChat />
      <Chat />
    </div>
  );
}

export default App;