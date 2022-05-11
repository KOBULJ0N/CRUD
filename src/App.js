import { Navigate, Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home';

import React from 'react'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}


