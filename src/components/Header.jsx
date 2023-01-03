import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';

const Header = () => {
  const { state } = useContext(Context);

  return (
    <header className='header'>
      <div className='container'>
        <div className='navbrand'>
          <Link to='/'>myTools</Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to='generator'>barcode generator</Link>
            </li>
            <li>
              <Link to='grocery'>grocery codes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
