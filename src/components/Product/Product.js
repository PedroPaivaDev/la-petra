import React from 'react';
import styles from './Product.module.css';

const Product = ({product, setModalProduct}) => {

  function handleClick() {
    setModalProduct(product.id)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.image} style={{background: `url(${product.image}) no-repeat`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <h4>{product.name}</h4>
        <h3>R${product.price.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Product;