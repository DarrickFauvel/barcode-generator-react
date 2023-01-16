import { useStore } from '@nanostores/react'
import { isMenuOpen } from '../stores/menuStore'

import { Link } from 'react-router-dom'

const Header = () => {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <header className='header'>
      <div className='container'>
        <div className='navbrand'>
          <Link to='about'>myTools</Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to='generator'>generator</Link>
            </li>
            <li>
              <Link to='produce'>produce</Link>
            </li>
            {/* Timer is not fully operational yet, 
              as it requires state management */}
            {/* <li>
              <Link to='timer'>timer</Link>
            </li> */}
            <li>
              <a href='#' onClick={() => isMenuOpen.set(!$isMenuOpen)}></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
