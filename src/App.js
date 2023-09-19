import { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div className='app__body'>
        <Router>
        <Sidebar />
          <Routes>
          {/* <Route path='/' element= {<h1>Home screen</h1>} /> */}
          <Route path="/rooms/:roomId" element={<Chat />} />
          <Route path='/' />
          </Routes>
          </Router>
  
          {/* <Sidebar />
          <Chat /> */}
        </div>

      )}
      </div>

  );
}

export default App;
