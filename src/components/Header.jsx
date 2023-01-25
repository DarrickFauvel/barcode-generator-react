import { useStore } from '@nanostores/react'
import { isMenuOpen } from '../stores/menuStore'
import { appData } from '../stores/appStore'

import { Link } from 'react-router-dom'
import MenuFlyout from './MenuFlyout'

const Header = () => {
  const $isMenuOpen = useStore(isMenuOpen)
  const $appData = useStore(appData)

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
          <div className='navbrand'>
            <Link to='/'>
              <img src={`/icons/${$appData.icon}`} alt='' />
              <span>{$appData.title}</span>
            </Link>
          </div>

          <a href='#' onClick={() => isMenuOpen.set(!$isMenuOpen)}>
            <img src='/icons/menu.svg' height={20} alt='' />
          </a>
        </nav>

        {/* <nav>
          <ul>
            <li>
              <Link to='generator'>generator</Link>
            </li>
            <li>
              <Link to='produce'>produce</Link>
            </li>
            
            <li>
              <a href='#' onClick={() => isMenuOpen.set(!$isMenuOpen)}></a>
            </li>
          </ul>
        </nav> */}
      </div>

      <MenuFlyout />
    </header>
  )
}

export default Header
