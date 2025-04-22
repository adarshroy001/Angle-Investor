import './App.css'
import Header from './components/Header'
import Hero from './components/Home/Hero'
import CardsWhites from './components/Home/CardsWhite'
import CardsDark from './components/Home/CardsDark'
import LongDarkSection from './components/Home/LongDarkSection'

function App() {

  return (
    <div className="text-white overflow-hidden ">
    <Header />
    <Hero />
    <CardsWhites/>
    <CardsDark/>
    <LongDarkSection/>
  </div>
  )
}

export default App
