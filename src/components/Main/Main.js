import React from 'react';
import styles from './Main.module.css';
import Layer from '../Layer/Layer';

const Main = () => {
  return (
    <div className={styles.main}>
      <Layer position={360}>SOBRE</Layer>
      <Layer position={240}>PRODUTOS</Layer>
      <Layer position={120}>ENDEREÇO</Layer>
      <Layer position={0}>CONTATO</Layer>
    </div>
  )
}

export default Main;