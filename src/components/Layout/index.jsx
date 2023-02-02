import classes from './layout.module.css';

import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../stores/menuStore';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  return (
    <main className={classes.main}>
      <div className="container">
        <Outlet />
      </div>
      {/* END container */}
    </main>
  );
};

export default Layout;
