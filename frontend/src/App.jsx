import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CardWhites from './components/CardsWhite'

function App() {

  return (
    <div className="bg-gray-900 text-white overflow-hidden ">
    <Header />
    <Hero />
    <CardWhites/>
  </div>
  )
}

export default App
