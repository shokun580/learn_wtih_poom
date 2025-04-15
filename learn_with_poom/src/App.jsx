import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Update from './update'
import Add from './Add'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<Update />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  )

}

export default App
