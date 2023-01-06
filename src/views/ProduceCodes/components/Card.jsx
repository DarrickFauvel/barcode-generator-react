import Barcode from '../../../components/Barcode'

const Card = ({ item }) => {
  return (
    <article className='card' key={item.name}>
      <h3 className='card-title'>{item.name}</h3>

      <div className='card-content'>
        <div className='card-img'>
          <img src={item.imgUrl} alt={item.name} />
        </div>

        <section className='barcode'>
          {item.upc && <Barcode barcodeValue={item.upc} dpci={item.dpci} />}
        </section>
      </div>
    </article>
  )
}

export default Card
