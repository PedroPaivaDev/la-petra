import React from 'react';
import styles from './ModalEasterProduct.module.css';

import ContentEasterProduct from './ContentEasterProduct';

const ModalEasterProduct = ({products, modalProduct, setModalProduct}) => {
  
  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) setModalProduct(null);
  }
  
  return (
    <div className={styles.container} onClick={handleOutsideClick}>
      <ContentEasterProduct products={products} modalProduct={modalProduct}/>
    </div>
  )
}

export default ModalEasterProduct;