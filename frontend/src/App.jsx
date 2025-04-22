import './App.css'
import Header from './components/Header'
import Hero from './components/Home/Hero'
import CardsWhites from './components/Home/CardsWhite'
import CardsDark from './components/Home/CardsDark'
import LongDarkSection from './components/Home/LongDarkSection'
import WhereToPitch from './components/Home/WhereToPitch'

function App() {

  return (
    <div className="text-white overflow-hidden ">
    <Header />
    <Hero />
    <CardsWhites/>
    <CardsDark/>
    <LongDarkSection/>
    <WhereToPitch/>
  </div>
  )
}

export default App
