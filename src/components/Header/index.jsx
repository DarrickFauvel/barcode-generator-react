import { useStore } from "@nanostores/react"
import { isMenuOpen } from "../../stores/menuStore"
import { appData } from "../../stores/appStore"

import { Link } from "react-router-dom"
import Drawer from "../Drawer"

import classes from "./header.module.css"

const Header = () => {
  const $isMenuOpen = useStore(isMenuOpen)
  const $appData = useStore(appData)

  return (
    <header className={classes.header}>
      <div className="container">
        <nav className={classes.nav}>
          <div className={classes.navbrand}>
            <Link to="/">
              <img src={`/icons/${$appData.icon}`} alt="" />
              <span>{$appData.title}</span>
            </Link>
          </div>

          <img
            className={classes.burger}
            src="/icons/menu.svg"
            height={20}
            alt=""
            onClick={() => isMenuOpen.set(!$isMenuOpen)}
          />
        </nav>
      </div>

      <Drawer />
    </header>
  )
}

export default Header
