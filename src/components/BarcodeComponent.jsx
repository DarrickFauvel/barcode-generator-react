import { useContext } from 'react';
import { Context } from '../context';

// import ReactJsBarcode from "react-jsbarcode";
import Barcode from 'react-barcode';

const BarcodeComponent = (props) => {
  const { state } = useContext(Context);

  // return <ReactJsBarcode value={props.barcodeValue || state.barcodeValue} options={{ height: 50 }} />;
  return (
    <Barcode
      value={props.barcodeValue || state.barcodeValue}
      height={50}
      text={props.dpci}
    />
  );
};

export default BarcodeComponent;
