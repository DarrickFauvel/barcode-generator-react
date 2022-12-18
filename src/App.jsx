import { useContext } from "react";
import { Context } from "./context";

import Header from "./components/Header";
import Form from "./components/Form";
import Barcode from "./components/Barcode";
import Footer from "./components/Footer";
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
    <div className="App">
      <div className="wrapper">
        <Header />

        <main className="main">

        {/* <LocationButtons
            state={state}
            // locations={locations}
            changeLocation={changeLocation}
          /> */}

        {/* <section className="sublocation">
            <input
              type="number"
              name="subLocationNumber"
              min="1"
              max="999"
              value={state.subLocationNumber}
              onChange={handleChange}
            />
          </section> */}

        {/* <section className="parts">
            <div className="part">
              {state.location ? state.location : "01A"}
            </div>
            <div className="part">{renderSubLocationNumber()}</div>
          </section> */}

        <Form />

        {state.barcodeValue && <Barcode value={state.barcodeValue} />}

        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
