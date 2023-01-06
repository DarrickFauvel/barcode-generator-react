import { useContext } from 'react'
import { Context } from '../../context'

import PageTitle from '../../components/PageTitle'
import Form from './components/Form'
import Barcode from '../../components/Barcode'

const BarcodeGenerator = () => {
  const { state } = useContext(Context)

  return (
    <>
      <PageTitle title='Barcode Generator' />

      <Form />

      <section className='barcode'>
        {state.barcodeValue && <Barcode value={state.barcodeValue} />}
      </section>
    </>
  )
}

export default BarcodeGenerator
