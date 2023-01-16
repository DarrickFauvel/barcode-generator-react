import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbrand'>
          <Link to='/'>myTools</Link>
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
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
