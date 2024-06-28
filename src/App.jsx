import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ModelS from './pages/ModelS'
import Model3 from './pages/Model3'
import ModelX from './pages/ModelX'
import ModelY from './pages/ModelY'
import SolarRoof from './pages/SolarRoof'
import SolarPanels from './pages/SolarPanels'
import { ScrollbarContextProvider } from './Context/ScrollbarContext'

export default function App () {
  const [showNavBurger, setShowNavBurger] = useState(false)

  return (
    <div className='App'>
      <ScrollbarContextProvider>
        <BrowserRouter>
          <Header
            showNavBurger={showNavBurger}
            setShowNavBurger={setShowNavBurger}
          />
          <Routes>
            <Route path='/' element={<Home showNavBurger={showNavBurger} />} />
            <Route path='/models' element={<ModelS />} />
            <Route path='/model3' element={<Model3 />} />
            <Route path='/modelx' element={<ModelX />} />
            <Route path='/modely' element={<ModelY />} />
            <Route path='/solar-roof' element={<SolarRoof />} />
            <Route path='/solar-panels' element={<SolarPanels />} />
          </Routes>
        </BrowserRouter>
      </ScrollbarContextProvider>
    </div>
  )
}
