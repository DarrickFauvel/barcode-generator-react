import { useContext } from 'react'
import { Context } from '../../context'

import PageTitle from '../../components/PageTitle'
import Card from './components/Card'

const ProduceCodes = () => {
  const { ProduceData } = useContext(Context)

  return (
    <>
      <PageTitle title='Produce Codes' />

      <section className='cards'>
        {ProduceData.map((item) => (
          <Card item={item} key={item.upc} />
        ))}
      </section>
    </>
  )
}

export default ProduceCodes
