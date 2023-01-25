import React from 'react';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
