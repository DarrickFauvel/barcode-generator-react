import classes from "./layout.module.css"

import { useStore } from "@nanostores/react"
import { isMenuOpen } from "../../stores/menuStore"

import { Outlet } from "react-router-dom"

const Layout = () => {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <main className={classes.main}>
      <div className={`container ${classes["main-container"]}`}>
        <Outlet />
      </div>
    </main>
  )
}

export default Layout
