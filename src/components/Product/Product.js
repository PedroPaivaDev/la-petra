import React from 'react';
import styles from './Product.module.css';

import banofe from '../../assets/products/banofe.jpg';

const Product = () => {
  return (
    <div className={styles.container} style={{background: `url(${banofe})`,backgroundSize: "contain"}}>
      <h4>Banofe</h4>
      <h4>R$11,50</h4>
    </div>
  )
}

export default Product;