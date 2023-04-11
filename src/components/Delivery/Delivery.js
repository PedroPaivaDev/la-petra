import React from 'react';
import styles from './Delivery.module.css';

import Grid from '../Grid/Grid';
import { getProducts } from '../../services/firebase';

import EasterProduct from '../Easter/EasterProduct';
import ModalEasterProduct from '../Easter/ModalEasterProduct';

const Delivery = () => {
  const [candy, setCandy] = React.useState();
  const [portions, setPortions] = React.useState();
  const [slices, setSlices] = React.useState();
  const [modalProduct, setModalProduct] = React.useState();

  React.useEffect(() => {
    getProducts('delivery/candy', setCandy);
    getProducts('delivery/portions', setPortions);
    getProducts('delivery/slices', setSlices);
  },[])

  return (
    <div className={`${styles.container} animeLeft`}>
      {modalProduct && 
        <ModalEasterProduct
          modalProduct={modalProduct}
          setModalProduct={setModalProduct}
        />
      }
      <div className={styles.products}>
        {candy && candy.map((sweet) => (
          <Grid key={sweet.id} xs={11} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={sweet} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>
      <div className={styles.products}>
        {portions && portions.map((portion) => (
          <Grid key={portion.id} xs={11} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={portion} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>
      <div className={styles.products}>
        {slices && slices.map((slice) => (
          <Grid key={slice.id} xs={11} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={slice} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>
    </div>
  );  
}

export default Delivery;