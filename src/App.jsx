import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './context'

import Layout from './components/Layout'
import Header from './components/Header'

import Home from './components/Home'
import BarcodeGenerator from './components/BarcodeGenerator'
import ProduceCodes from './components/ProduceCodes'
import Footer from './components/Footer'

function App() {
  const { state } = useContext(Context)

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='generator' element={<BarcodeGenerator />} />
          <Route path='produce' element={<ProduceCodes />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
