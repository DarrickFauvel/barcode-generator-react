import Barcode from "../../../../components/Barcode"
import ImageWithFixedSize from "../../../../components/ImageWithFixedSize"

import classes from "./card.module.css"

const Card = ({ item }) => {
  return (
    <article className={classes.card} key={item.name} id={item.upc}>
      <h3 className={classes.cardTitle}>{item.name}</h3>

      <div className={classes.cardContent}>
        <div className={classes.cardImg}>
          <ImageWithFixedSize src={item.imgUrl} width={40} height={40} />
          {/* <img src={item.imgUrl} alt={item.name} width="40" height="40" /> */}
        </div>

        <section className="barcode">
          {item.upc && <Barcode barcodeValue={item.upc} dpci={item.dpci} />}
        </section>
      </div>
    </article>
  )
}

export default Card
