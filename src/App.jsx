import { useStore } from "@nanostores/react"
import { isMenuOpen } from "./stores/menuStore"

import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Menu from "./views/Menu"
import BarcodeGenerator from "./views/BarcodeGenerator"
import ProduceCodes from "./views/ProduceCodes"
import BreakTimer from "./views/BreakTimer"
import About from "./views/About"

import classes from "./app.module.css"

function App() {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <div className={classes.app}>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="generator" element={<BarcodeGenerator />} />
          <Route path="produce" element={<ProduceCodes />} />
          <Route path="timer" element={<BreakTimer />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
