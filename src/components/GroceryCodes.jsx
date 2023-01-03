import { useContext } from 'react';
import { Context } from '../context';

import PageTitle from './PageTitle';

import BarcodeComponent from './BarcodeComponent';

const GroceryCodes = () => {
  const { groceryCodes } = useContext(Context);

  return (
    <>
      <PageTitle title='Grocery Codes' />

      <section className='cards'>
        {groceryCodes.map((item) => {
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
          );
        })}
      </section>
    </>
  );
};

export default GroceryCodes;
