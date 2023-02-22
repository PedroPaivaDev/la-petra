import React from 'react';
import styles from './Product.module.css';

const Product = ({product, modalProduct, setModalProduct}) => {

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
      <div
        className={styles.image}
        style={{
          background: `url(${product.image}) no-repeat center center`,
          backgroundSize: "cover"
        }}
      />
      <div className={styles.description}>
        <h4>{product.name}</h4>
        <h3>R${product.price.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Product;