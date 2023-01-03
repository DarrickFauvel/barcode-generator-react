import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='main'>
      <div className='container'>
        <Outlet />
      </div>
      {/* END container */}
    </main>
  );
};

export default Layout;
