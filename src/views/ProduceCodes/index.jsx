import { useState, useEffect, useContext } from 'react'
import { Context } from '../../context'

import PageTitle from '../../components/PageTitle'
import Card from './components/Card'

const ProduceCodes = () => {
  const { ProduceData } = useContext(Context)
  const [showModal, setShowModal] = useState(false)
  const [item, setItem] = useState({
    name: 'Lemon',
    upc: '204053000004',
    dpci: '267-01-4053',
    imgUrl:
      'https://target.scene7.com/is/image/Target/GUEST_3d962311-4a0b-47f9-8146-28740dfa2d53?wid=325&hei=325&qlt=80&fmt=pjpeg'
  })

  const handleClick = (e) => {
    const itemUpc = e.target.closest('a').dataset.itemUpc
    const newItem = ProduceData.find((item) => item.upc === itemUpc)
    setItem(newItem)
    setShowModal(true)
  }

  useEffect(() => {
    const modalEl = document.querySelector('.modal')

    showModal ? modalEl.classList.remove('hide') : modalEl.classList.add('hide')
  }, [showModal])

  return (
    <>
      <PageTitle title='Produce Codes' />

      <ul className='produce-index'>
        {ProduceData.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        }).map((item) => (
          <li key={item.name}>
            <a href='#' onClick={handleClick} data-item-upc={item.upc}>
              <img src={item.imgUrl} alt={item.name} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* <section className='cards'>
        {ProduceData.map((item) => (
          <Card item={item} key={item.upc} />
        ))}
      </section> */}

      <section className='modal hide'>
        <div className='backdrop' onClick={() => setShowModal(false)}>
          <div className='modalCard'>
            <Card item={item} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProduceCodes
