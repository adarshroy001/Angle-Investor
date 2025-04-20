import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <Header />
    <Hero />
  </div>
  )
}

export default App
