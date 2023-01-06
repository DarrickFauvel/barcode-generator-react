import { useContext } from 'react'
import { Context } from '../context'

import PageTitle from './PageTitle'

import BarcodeComponent from './BarcodeComponent'

const ProduceCodes = () => {
  const { ProduceData } = useContext(Context)

  return (
    <>
      <PageTitle title='Produce Codes' />

      <section className='cards'>
        {ProduceData.map((item) => {
          return (
            <article className='card' key={item.name}>
              <h3 className='card-title'>{item.name}</h3>
              <div className='card-content'>
                <div className='card-img'>
                  <img src={item.imgUrl} alt={item.name} />
                </div>
                <section className='barcode'>
                  {item.upc && (
                    <BarcodeComponent
                      barcodeValue={item.upc}
                      dpci={item.dpci}
                    />
                  )}
                </section>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default ProduceCodes
