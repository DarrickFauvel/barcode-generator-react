import { useStore } from "@nanostores/react"
import { isMenuOpen } from "../../stores/menuStore"
import { appData } from "../../stores/appStore"

import { Link } from "react-router-dom"
import Drawer from "../Drawer"

import classes from "./header.module.css"
import { Icon } from "@iconify-icon/react"

const Header = () => {
  const $isMenuOpen = useStore(isMenuOpen)
  const $appData = useStore(appData)

  return (
    <header className={classes.header}>
      <div className={`container ${classes["header-container"]}`}>
        <nav className={classes.nav}>
          <div className={classes.navbrand}>
            <Link to="/">
              <Icon
                className={classes.icon}
                icon="material-symbols-light:phone-iphone-outline"
                height={40}
              />
              {/* <img src={`/icons/${$appData.icon}`} alt="" /> */}
              <span>{$appData.title}</span>
            </Link>
          </div>

          <Icon
            className={classes.burger}
            icon="lucide:menu"
            height={40}
            onClick={() => isMenuOpen.set(true)}
          />
          {/* <img
            className={classes.burger}
            src="/icons/menu.svg"
            height={20}
            alt=""
            onClick={() => isMenuOpen.set(true)}
          /> */}

          <Drawer />
        </nav>
      </div>
    </header>
  )
}

export default Header
