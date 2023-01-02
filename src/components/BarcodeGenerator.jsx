import { useContext } from 'react';
import { Context } from '../context';

import Form from './Form';
import BarcodeComponent from './BarcodeComponent';

const BarcodeGenerator = () => {
  const { state } = useContext(Context);

  return (
    <>
      <h2>Barcode Generator</h2>
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

      <section className='barcode'>
        {state.barcodeValue && <BarcodeComponent value={state.barcodeValue} />}
      </section>
    </>
  );
};

export default BarcodeGenerator;
