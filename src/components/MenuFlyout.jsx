import { useStore } from '@nanostores/react'
import { Link } from 'react-router-dom'
import {
  menuItems,
  isMenuOpen,
  activeMenuItemHighlight
} from '../stores/menuStore'

const MenuFlyout = () => {
  const $menuItems = useStore(menuItems)
  const $isMenuOpen = useStore(isMenuOpen)
  const $activeMenuItemHighlight = useStore(activeMenuItemHighlight)

  const handleMenuFlyout = () => {
    isMenuOpen.set(!$isMenuOpen)
  }

  return (
    <section className={`menu-flyout ${$isMenuOpen && 'open'}`}>
      <div className='menu-header'>
        <Link to='/' onClick={handleMenuFlyout}>
          Menu
        </Link>

        <a href='#' onClick={handleMenuFlyout}>
          <img src='/icons/close.svg' height={20} alt='' />
        </a>
      </div>

      <div className='menu-body'>
        <ul>
          {$menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.route}
                onClick={handleMenuFlyout}
                className={
                  item.name === $activeMenuItemHighlight ? 'active' : ''
                }>
                <img src={`/icons/${item.icon}`} alt='' />
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
