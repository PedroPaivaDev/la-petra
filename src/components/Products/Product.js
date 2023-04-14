import React from 'react';
import { useLocation } from 'react-router-dom';
import { BagContext } from '../../contexts/BagContext';
import styles from './Product.module.css';

const Product = ({product, setModalProduct}) => {

  const [bag, setBag] = React.useContext(BagContext);
  const {pathname} = useLocation();

  function handleClick() {
    setModalProduct(product)
  }

  function handleDelete() {
    if(window.confirm(`Deseja remover ${product.name} do seu pedido?`)) {
      setBag(bag.filter(productBag => productBag.id !== product.id));
    } else {return;}
  }

  return (
    <div
      className={styles.container}
      onClick={setModalProduct ? handleClick : null}
    >

      <h3>{product.name}</h3>
      {pathname==='/order' && 
        <span className={styles.delete} onClick={handleDelete}>X</span>
      }

      {pathname==='/order' && <div className={styles.description}>
        {product.type!=="" ?
          <p>Tipo: {product.type}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        {product.size && <p>Tamanho: {product.size}</p>}
        {product.options && product.options!=='' ?
          <p>Opção: {product.options}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        {product.flavors && product.flavors!=='' ?
          <p>Sabor: {product.flavors}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        {product.additional && product.additional!=='' ?
          <p>Adicional: {product.additional}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        {product.quantity && product.quantity!=='' ?
          <p>Quantidade: {product.quantity}</p> :
          <p style={{opacity: 0}}> . </p>
        }
        <h4>R${product.price.toFixed(2)}</h4>
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

export default Product;