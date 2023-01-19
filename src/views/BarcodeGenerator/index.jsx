import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { generatorFormData } from '../../stores/barcodeGeneratorStore'
import { activeMenuItemHighlight } from '../../stores/menuStore'

import PageTitle from '../../components/PageTitle'
import Form from './components/Form'
import Barcode from '../../components/Barcode'

const title = 'Barcode Generator'

const BarcodeGenerator = () => {
  const $generatorFormData = useStore(generatorFormData)
  const $activeMenuItemHighlight = useStore(activeMenuItemHighlight)

  useEffect(() => {
    const setActiveMenuItemHighlight = (menuItemName) => {
      activeMenuItemHighlight.set(menuItemName)
    }
    setActiveMenuItemHighlight('Barcode Generator')
  }, [])

  return (
    <>
      <PageTitle title={title} />

      <Form />

      <section className='barcode'>
        {$generatorFormData.barcodeValue && (
          <Barcode value={$generatorFormData.barcodeValue} />
        )}
      </section>
    </>
  )
}

export default BarcodeGenerator
