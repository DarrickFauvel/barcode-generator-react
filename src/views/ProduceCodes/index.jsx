import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { isModalShown } from '../../stores/modalStore'

import getProduceData from '../../helpers/getProduceData'

import PageTitle from '../../components/PageTitle'
import Card from './components/Card'

const ProduceCodes = () => {
  const produceData = getProduceData()
  const $isModalShown = useStore(isModalShown)

  const [item, setItem] = useState({
    name: 'Lemon',
    upc: '204053000004',
    dpci: '267-01-4053',
    imgUrl:
      'https://target.scene7.com/is/image/Target/GUEST_3d962311-4a0b-47f9-8146-28740dfa2d53?wid=325&hei=325&qlt=80&fmt=pjpeg'
  })

  const handleClick = (e) => {
    const itemUpc = e.target.closest('a').dataset.itemUpc
    const newItem = produceData.find((item) => item.upc === itemUpc)
    setItem(newItem)
    isModalShown.set(!$isModalShown)
  }

  return (
    <>
      <PageTitle title='Produce Codes' />

      <ul className='produce-index'>
        {produceData
          .sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
          })
          .map((item) => (
            <li key={item.name}>
              <a href='#' onClick={handleClick} data-item-upc={item.upc}>
                <img src={item.imgUrl} alt={item.name} />
                {item.name}
              </a>
            </li>
          ))}
      </ul>

      <section className={`modal ${!$isModalShown && 'hide'}`}>
        <div
          className='backdrop'
          onClick={() => isModalShown.set(!$isModalShown)}>
          <div className='modalCard'>
            <Card item={item} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProduceCodes
