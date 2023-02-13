import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ModelS from './pages/ModelS'

export default function App () {
  const [showNavBurger, setShowNavBurger] = useState(false)

  return (
    <div className='App'>
      <BrowserRouter>
        <Header
          showNavBurger={showNavBurger}
          setShowNavBurger={setShowNavBurger}
        />
        <Routes>
          <Route path='/' element={<Home showNavBurger={showNavBurger} />} />
          <Route path='/ModelS' element={<ModelS />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
