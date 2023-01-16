import { useStore } from '@nanostores/react'
import { isMenuOpen } from './stores/menuStore'

import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Header from './components/Header'

import About from './views/About'
import BarcodeGenerator from './views/BarcodeGenerator'
import ProduceCodes from './views/ProduceCodes'
import Footer from './components/Footer'
import BreakTimer from './views/BreakTimer'
import MenuFlyout from './components/MenuFlyout'

function App() {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <div className={`App ${$isMenuOpen && 'layout-shift'}`}>
      <Header />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<About />} />
          <Route path='generator' element={<BarcodeGenerator />} />
          <Route path='produce' element={<ProduceCodes />} />
          <Route path='timer' element={<BreakTimer />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>

      <Footer />

      <MenuFlyout />
    </div>
  )
}

export default App
