import { useContext } from "react";
import { Context } from "../context";

// import ReactJsBarcode from "react-jsbarcode";

const Barcode = (props) => {
  const { state } = useContext(Context);

  // return <ReactJsBarcode value={props.barcodeValue || state.barcodeValue} options={{ height: 50 }} />;
};

export default Barcode;
