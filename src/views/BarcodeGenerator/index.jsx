import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { generatorFormData } from '../../stores/barcodeGeneratorStore';
import { activeMenuItemHighlight } from '../../stores/menuStore';

import PageTitle from '../../components/PageTitle';
import Form from './components/Form';
import Barcode from '../../components/Barcode';

const title = 'Barcode Generator';

import classes from '../../components/Barcode/barcode.module.css';

const BarcodeGenerator = () => {
  const $generatorFormData = useStore(generatorFormData);

  useEffect(() => {
    activeMenuItemHighlight.set('Barcode Generator');
  }, []);

  return (
    <>
      <PageTitle title={title} />

      <Form />

      <section className={classes.barcode}>
        {$generatorFormData.barcodeValue && (
          <Barcode value={$generatorFormData.barcodeValue} />
        )}
      </section>
    </>
  );
};

export default BarcodeGenerator;
