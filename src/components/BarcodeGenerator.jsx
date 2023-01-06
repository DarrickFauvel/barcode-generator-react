import { useContext } from 'react'
import { Context } from '../context'

import PageTitle from './PageTitle'
import Form from './Form'
import BarcodeComponent from './BarcodeComponent'

const BarcodeGenerator = () => {
  const { state } = useContext(Context)

  return (
    <>
      <PageTitle title='Barcode Generator' />

      <Form />

      <section className='barcode'>
        {state.barcodeValue && <BarcodeComponent value={state.barcodeValue} />}
      </section>
    </>
  )
}

export default BarcodeGenerator
