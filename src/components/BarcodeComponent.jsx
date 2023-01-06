import { useContext } from 'react'
import { Context } from '../context'

import Barcode from 'react-barcode'

const BarcodeComponent = (props) => {
  const { state } = useContext(Context)

  return (
    <Barcode
      value={props.barcodeValue || state.barcodeValue}
      height={50}
      text={props.dpci}
      fontSize={15}
    />
  )
}

export default BarcodeComponent
