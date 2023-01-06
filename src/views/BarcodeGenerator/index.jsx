import { useContext } from 'react'
import { Context } from '../../context'

import PageTitle from '../../components/PageTitle'
import Form from './components/Form'
import BarcodeComponent from '../../components/Barcode'

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
