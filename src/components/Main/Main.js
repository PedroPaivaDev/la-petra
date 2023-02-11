import React from 'react';
import styles from './Main.module.css';
import Layer from '../Layer/Layer';
import strawberry from '../../assets/strawberry.jpg';
import chocolate from '../../assets/chocolate-balls.png';
import sprinkles from '../../assets/sprinkles.png';
import cream from '../../assets/cream.jpg';

const Main = () => {
  return (
    <div className={styles.main}>
      <Layer bg={strawberry} position={360}>SOBRE</Layer>
      <Layer bg={sprinkles} position={240}>PRODUTOS</Layer>
      <Layer bg={chocolate} position={120}>ENDEREÇO</Layer>
      <Layer bg={cream} position={0}>CONTATO</Layer>
    </div>
  )
}

export default Main;