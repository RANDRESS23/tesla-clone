import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'

export default function App () {
  const [showNavBurger, setShowNavBurger] = useState(false)

  return (
    <div className='App'>
      <Header
        showNavBurger={showNavBurger}
        setShowNavBurger={setShowNavBurger}
      />
      <Home showNavBurger={showNavBurger} />
    </div>
  )
}
