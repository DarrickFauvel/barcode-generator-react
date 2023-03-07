import { useStore } from "@nanostores/react"
import { Link } from "react-router-dom"
import {
  menuItems,
  isMenuOpen,
  activeMenuItemHighlight,
} from "../../stores/menuStore"

import classes from "./drawer.module.css"

const MenuFlyout = () => {
  const $menuItems = useStore(menuItems)
  const $isMenuOpen = useStore(isMenuOpen)
  const $activeMenuItemHighlight = useStore(activeMenuItemHighlight)

  const handleMenuFlyout = () => {
    isMenuOpen.set(!$isMenuOpen)
  }

  return (
    <section
      className={`${classes.drawer} ${$isMenuOpen && `${classes.open}`}`}>
      <div className={classes.drawerHeader}>
        <img
          className={classes.close}
          src="/icons/close.svg"
          height={20}
          alt=""
          onClick={handleMenuFlyout}
        />
      </div>

      <div className={classes.menuBody}>
        <ul>
          {$menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.route}
                onClick={handleMenuFlyout}
                className={
                  item.name === $activeMenuItemHighlight
                    ? `${classes.active}`
                    : ""
                }>
                <img src={`/icons/${item.icon}`} alt="" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MenuFlyout
