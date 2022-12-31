import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='wrapper'>
      <main className='main'>
        <div className='container'>
          <Outlet />
        </div>
        {/* END container */}
      </main>
    </div>
  );
};

export default Layout;
