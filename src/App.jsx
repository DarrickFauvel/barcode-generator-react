import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context';

import Layout from './components/Layout';
import Header from './components/Header';

import Footer from './components/Footer';
import Home from './components/Home';
import BarcodeGenerator from './components/BarcodeGenerator';
import GroceryCodes from './components/GroceryCodes'
// import LocationButtons from "./components/LocationButtons";

function App() {
  const { state } = useContext(Context);

  // const changeLocation = (e) => {
  //   const { name, textContent } = e.target;

  //   setState((prevState) => ({ ...prevState, [name]: textContent }));
  // };

  // const renderSubLocationNumber = () => {
  //   if (state.subLocationNumber.length === 1) {
  //     return "00" + state.subLocationNumber;
  //   } else if (state.subLocationNumber.length === 2) {
  //     return "0" + state.subLocationNumber;
  //   }
  // };

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='generator' element={<BarcodeGenerator />} />
          <Route path='grocery' element={<GroceryCodes />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
