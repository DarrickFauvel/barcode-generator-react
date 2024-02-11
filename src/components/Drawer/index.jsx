import { useRef } from "react"
import { Link } from "react-router-dom"
import { useStore } from "@nanostores/react"
import {
  menuItems,
  isMenuOpen,
  activeMenuItemHighlight,
} from "../../stores/menuStore"
import useOnClickOutside from "../../hooks/useOnClickOutside"

import classes from "./drawer.module.css"
import { Icon } from "@iconify-icon/react"

const MenuFlyout = () => {
  const drawerRef = useRef()
  const $menuItems = useStore(menuItems)
  const $isMenuOpen = useStore(isMenuOpen)
  const $activeMenuItemHighlight = useStore(activeMenuItemHighlight)

  useOnClickOutside(drawerRef, () => isMenuOpen.set(false))

  return (
    <section
      ref={drawerRef}
      className={`${classes.drawer} ${$isMenuOpen && `${classes.open}`}`}>
      <div className={classes.drawerHeader}>
        <Icon
          className={classes.close}
          icon={"ep:close-bold"}
          height={40}
          onClick={() => isMenuOpen.set(false)}
        />
        {/* <img
          className={classes.close}
          src="/icons/close.svg"
          height={20}
          alt=""
          onClick={() => isMenuOpen.set(false)}
        /> */}
      </div>

      <div className={classes.menuBody}>
        <ul>
          {$menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.route}
                onClick={() => isMenuOpen.set(false)}
                className={
                  item.name === $activeMenuItemHighlight
                    ? `${classes.active}`
                    : ""
                }>
                <Icon icon={item.icon} width={40} />
                {/* <img src={`/icons/${item.icon}`} alt="" /> */}
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
