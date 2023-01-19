import { useStore } from '@nanostores/react'
import { Link } from 'react-router-dom'
import { menuItems, isMenuOpen, selectedMenuItem } from '../stores/menuStore'

const MenuFlyout = () => {
  const $menuItems = useStore(menuItems)
  const $isMenuOpen = useStore(isMenuOpen)
  const $selectedMenuItem = useStore(selectedMenuItem)

  const handleMenuFlyout = () => {
    isMenuOpen.set(!$isMenuOpen)
  }

  const handleMenuClick = (itemName) => {
    selectedMenuItem.set(itemName)
    handleMenuFlyout()
  }

  return (
    <section className={`menu-flyout ${$isMenuOpen && 'open'}`}>
      <div className='menu-header'>
        <span>Menu</span>

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
                onClick={() => handleMenuClick(item.name)}
                className={item.name === $selectedMenuItem ? 'active' : ''}>
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
