import React from 'react';
import styles from './Easter.module.css';

import Button from '../Forms/Button';
import EasterProduct from './EasterProduct';
import { useNavigate } from 'react-router-dom';

import eggs from '../../services/eggs';

import ModalEasterProduct from './ModalEasterProduct';
import Grid from '../Grid/Grid';
import { addProduct } from '../../services/firebase';

const Easter = () => {
  const [modalProduct, setModalProduct] = React.useState();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/order");
  }

  const products = eggs.reduce((total, currentValue) => {
    return {...total, [currentValue.id]: {
      id: currentValue.id,
      name: currentValue.name,
      description: currentValue.description,
      weightsm: currentValue.weightsm,
      weightlg: currentValue.weightlg,
      pricesm: currentValue.pricesm,
      pricelg: currentValue.pricelg,
      image: currentValue.image
    }}
  }, {})
  const idsArray = Object.keys(products);
  
  return (
    <div className={styles.container}>
      <h2>Cardápio de Páscoa</h2>
      <p>Os ovos contém 1 banda e são feitos com casca de chocolate nobre e recheios de alta qualidade.</p>
      <p>Até o dia 06 de abril, você poderá escolher sua casca: blend, ao leite, meio amargo, branca ou branca crocante de biscoito.</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 250g: 350g a 450g</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 350g: 450g a 500g</p>

      {modalProduct && 
        <ModalEasterProduct
          products={products}
          modalProduct={modalProduct}
          setModalProduct={setModalProduct}
        />
      }

      <div className={styles.products}>
        {idsArray.map((id) => (
          <Grid key={products[id].id} xs={10} sm={6} md={5} lg={4} xl={3}>
            <EasterProduct product={products[id]} modalProduct={modalProduct} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>

      <Button onClick={handleClick}>Finalizar Pedido</Button>
    </div>
  )
}

export default Easter;