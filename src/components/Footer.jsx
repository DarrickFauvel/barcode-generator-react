import React, { useContext } from 'react';
import { Context } from '../context';

const Footer = () => {
  const { state } = useContext(Context);

  return (
    <footer className='footer'>
      <div className='container'>
        <p className='author'>Created by {state.author}.</p>
        <a className='footer__link' href={state.urlWebsite} target='_blank'>
          darrickdevelops.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
