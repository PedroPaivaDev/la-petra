import React from 'react';
import styles from './EasterProduct.module.css';

import ovo from '../../assets/easter/ovoBombomMorango-1.jpg'

const EasterProduct = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>Ovo Bombom Morango</h4>
      <div
        className={styles.image}
        style={{
          background: `url(${ovo}) no-repeat center center`,
          backgroundSize: "cover"
        }}
      />
    </div>
  )
}

export default EasterProduct;