import { useContext } from 'react';
import { Context } from '../context';

import Barcode from './Barcode';

const GroceryCodes = () => {
  const { groceryCodes } = useContext(Context);

  return (
    <>
      <h2>Grocery Codes</h2>
      <section className='cards'>
        {groceryCodes.map((item) => {
          return (
            <article className='card'>
              <h3 className='card-title'>{item.name}</h3>
              <div className='card-content'>
                <div className='card-img'>
                  <img src={item.imgUrl} alt={item.name} />
                </div>
                <section className='barcode'>
                  {item.upc && <Barcode barcodeValue={item.upc} />}
                </section>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default GroceryCodes;
