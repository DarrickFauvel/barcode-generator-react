import { useEffect } from "react"
import { Icon } from "@iconify-icon/react"
import { useStore } from "@nanostores/react"
import { activeMenuItemHighlight, menuItems } from "../../stores/menuStore"

import PageTitle from "../../components/PageTitle"
import { Link } from "react-router-dom"

import classes from "./menu.module.css"
import Qrcode from "../../components/Qrcode"
import ImageWithFixedSize from "../../components/ImageWithFixedSize"

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
                <Icon icon={item.icon} width={60} />
                {/* <img src={`/icons/${item.icon}`} alt="" /> */}
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
