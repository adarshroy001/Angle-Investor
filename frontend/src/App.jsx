import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CardsWhites from './components/CardsWhite'
import CardsDark from './components/CardsDark'

function App() {

  return (
    <div className="bg-gray-900 text-white overflow-hidden ">
    <Header />
    <Hero />
    <CardsWhites/>
    <CardsDark/>
  </div>
  )
}

export default App
