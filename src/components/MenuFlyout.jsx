import { useStore } from '@nanostores/react'
import { Link, Navigate } from 'react-router-dom'
import { menuItems, isMenuOpen } from '../stores/menuStore'

const MenuFlyout = () => {
  const $menuItems = useStore(menuItems)
  const $isMenuOpen = useStore(isMenuOpen)

  const handleMenu = () => {
    isMenuOpen.set(!$isMenuOpen)
  }

  return (
    <section className={`menu-flyout ${$isMenuOpen && 'open'}`}>
      <div className='menu-header'>
        <span>Menu</span>
        <span>
          <a href='#' onClick={handleMenu}>
            Close
          </a>
        </span>
      </div>

      <div className='menu-body'>
        <ul>
          {$menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.route} onClick={handleMenu}>
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
