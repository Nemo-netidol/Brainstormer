import { useState } from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import IdeaPage from './IdeaPage';
import NoPage from './Nopage';
import Login from './Login'
import Signup from './signup';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="idea" element={<IdeaPage />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
