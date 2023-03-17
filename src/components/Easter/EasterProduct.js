import React from 'react';
import styles from './EasterProduct.module.css';

const EasterProduct = ({product, modalProduct, setModalProduct}) => {

  function handleClick() {
    setModalProduct(product.id)
  }

  function vanishProduct() {
    if(modalProduct===product.id) {
      return 0
    } else {
      return 1
    }
  }

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      style={{opacity: vanishProduct()}}
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