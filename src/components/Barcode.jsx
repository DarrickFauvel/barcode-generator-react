import { useContext } from 'react'
import { Context } from '../context'

import ReactBarcode from 'react-barcode'

const Barcode = (props) => {
  const { state } = useContext(Context)

  return (
    <ReactBarcode
      value={props.barcodeValue || state.barcodeValue}
      height={50}
      text={props.dpci}
      fontSize={15}
    />
  )
}

export default Barcode
