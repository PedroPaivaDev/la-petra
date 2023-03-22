import React from 'react';
import styles from './EasterProduct.module.css';

const EasterProduct = ({product, setModalProduct}) => {

  function handleClick() {
    setModalProduct(product)
  }

  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <h4 className={styles.name}>{product.name}</h4>
      <div
        className={styles.image}
        style={{
          background: `url(${product.image[0]}) no-repeat center center`,
          backgroundSize: "cover"
        }}
      />
    </div>
  )
}

export default EasterProduct;