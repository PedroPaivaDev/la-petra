import React from 'react';
import { useLocation } from 'react-router-dom';
import { BagContext } from '../../contexts/BagContext';
import styles from './EasterProduct.module.css';

const EasterProduct = ({product, setModalProduct}) => {

  const [bag, setBag] = React.useContext(BagContext);
  const {pathname} = useLocation();

  function handleClick() {
    setModalProduct(product)
  }

  function handleDelete() {
    setBag(bag.filter(productBag => productBag.id !== product.id));
  }

  return (
    <div
      className={styles.container}
      onClick={setModalProduct ? handleClick : null}
    >

      <h4 className={styles.name}>{product.name}</h4>
      {pathname==='/order' && 
        <span className={styles.delete} onClick={handleDelete}>X</span>
      }

      {pathname==='/order' && <div className={styles.description}>
        {product.size && <p>Tamanho: {product.size}</p>}
        {product.options && product.options!=='' ?
          <p>Casca: {product.options}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        {product.flavors && product.flavors!=='' ?
          <p>Sabor: {product.flavors}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        <h4>R${product.size==="Pequeno" || product.size==="Único" ?
          product.sizesm.price.toFixed(2) :
          product.sizelg.price.toFixed(2)
        }</h4>
      </div>}

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