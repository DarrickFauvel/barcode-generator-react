import { useEffect } from "react"
import { useStore } from "@nanostores/react"
import { activeMenuItemHighlight, menuItems } from "../../stores/menuStore"

import PageTitle from "../../components/PageTitle"
import { Link } from "react-router-dom"

import classes from "./menu.module.css"
import Qrcode from "../../components/Qrcode"

const Menu = () => {
  const $menuItems = useStore(menuItems)
  const menuItemsWithoutAbout = $menuItems.filter(
    (item) => item.route !== "about"
  )

  useEffect(() => {
    activeMenuItemHighlight.set("Menu")
  }, [])

  return (
    <>
      {/* <PageTitle title={"Menu"} /> */}

      <section className={classes.menu}>
        <ul className={classes.tools}>
          {menuItemsWithoutAbout.map((item) => (
            <li key={item.name}>
              <Link to={item.route}>
                <img src={`/icons/${item.icon}`} alt="" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.qrcode}>
          <Qrcode />
        </div>
      </section>
    </>
  )
}

export default Menu
