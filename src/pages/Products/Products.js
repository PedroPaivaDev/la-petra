import React from 'react';
import styles from './Products.module.css';
import Delivery from '../../components/Delivery/Delivery';

const Products = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      {/* <div className={styles.row}> */}
        {/* <h2>Produtos a pronta entrega</h2> */}
        <Delivery/>
      {/* </div> */}
    </div>
  )
}

export default Products;