import React from 'react';
import styles from './ModalProduct.module.css';

import ContentProduct from './ContentProduct';

const ModalProduct = ({products, modalProduct, setModalProduct}) => {
  
  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) setModalProduct(null);
  }

  return (
    <div className={styles.container} onClick={handleOutsideClick}>
      <ContentProduct products={products} modalProduct={modalProduct}/>
    </div>
  )
}

export default ModalProduct;