import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './assets/conponents/Header'
import { Home } from './assets/pages/Home'
import { Work } from './assets/pages/Work'
import { Footer } from './assets/conponents/Footer'

function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
