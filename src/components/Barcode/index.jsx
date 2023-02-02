import { useStore } from '@nanostores/react';
import { generatorFormData } from '../../stores/barcodeGeneratorStore';

import ReactBarcode from 'react-barcode';

const Barcode = (props) => {
  const $generatorFormData = useStore(generatorFormData);

  return (
    <ReactBarcode
      value={props.barcodeValue || $generatorFormData.barcodeValue}
      height={50}
      text={props.dpci}
      fontSize={15}
    />
  );
};

export default Barcode;
