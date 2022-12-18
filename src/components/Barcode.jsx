import { useContext } from "react";
import { Context } from "../context";

import ReactJsBarcode from "react-jsbarcode";

const Barcode = () => {
  const { state } = useContext(Context);

  return <ReactJsBarcode value={state.barcodeValue} options={{ height: 50 }} />;
};

export default Barcode;
