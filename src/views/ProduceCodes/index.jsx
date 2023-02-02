import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isModalShown } from '../../stores/modalStore';
import { selectedProduceItem } from '../../stores/produceStore';
import { activeMenuItemHighlight } from '../../stores/menuStore';

import classes from './produce.module.css';

import getProduceData from '../../helpers/getProduceData';

import PageTitle from '../../components/PageTitle';
import Card from './components/Card';

const title = 'Produce Codes';

const ProduceCodes = () => {
  const produceData = getProduceData();
  const $isModalShown = useStore(isModalShown);
  const $selectedProduceItem = useStore(selectedProduceItem);

  const handleClick = (e) => {
    const itemUpc = e.target.closest('a').dataset.itemUpc;
    const newItem = produceData.find((item) => item.upc === itemUpc);
    selectedProduceItem.set(newItem);
    isModalShown.set(!$isModalShown);
  };

  useEffect(() => {
    activeMenuItemHighlight.set('Produce Codes');
  }, []);

  return (
    <>
      <PageTitle title={title} />

      <ul className={classes.produceIndex}>
        {produceData
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })
          .map((item) => (
            <li key={item.name}>
              <a href="#" onClick={handleClick} data-item-upc={item.upc}>
                <img src={item.imgUrl} alt={item.name} />
                {item.name}
              </a>
            </li>
          ))}
      </ul>

      <section className={`modal ${!$isModalShown && 'hide'}`}>
        <div
          className="backdrop"
          onClick={() => isModalShown.set(!$isModalShown)}>
          <div className="modalCard">
            <Card item={$selectedProduceItem} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProduceCodes;
