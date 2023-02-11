import React from 'react';
import styles from './Main.module.css';
import Layer from '../Layer/Layer';

const Main = () => {
  return (
    <div className={styles.main}>
      <Layer position={385}>SOBRE</Layer>
      <Layer position={265}>PRODUTOS</Layer>
      <Layer position={145}>ENDEREÇO</Layer>
      <Layer position={25}>CONTATO</Layer>
    </div>
  )
}

export default Main;