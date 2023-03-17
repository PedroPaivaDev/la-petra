import React from 'react';
import styles from './Easter.module.css';

import Button from '../Forms/Button';
import EasterProduct from './EasterProduct';
import { useNavigate } from 'react-router-dom';

const Easter = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <h2>Cardápio de Páscoa</h2>
      <p>Os ovos contém 1 banda e são feitos com casca de chocolate nobre e recheios de alta qualidade.</p>
      <p>Até o dia 06 de abril, você poderá escolher sua casca: blend, ao leite, meio amargo, branca ou branca crocante de biscoito.</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 250g: 350g a 450g</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 350g: 450g a 500g</p>

      <div className={styles.products}>
        <EasterProduct/>
        <EasterProduct/>
      </div>
      <Button onClick={() => navigate("/order")}>Finalizar Pedido</Button>
    </div>
  )
}

export default Easter;