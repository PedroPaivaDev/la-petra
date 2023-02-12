import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

import Layer from '../../components/Layer/Layer';

import Logotipo from '../../assets/Logotipo.png';
import strawberry from '../../assets/strawberry.jpg';
import chocolate from '../../assets/chocolate-balls.png';
import sprinkles from '../../assets/sprinkles.png';
import cream from '../../assets/cream.jpg';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.cup}></div>
      <div className={styles.layers}>
        <div className={styles.logo} onClick={() => navigate("sobre")}>
          <div className={styles.shadow}></div>
          <img src={Logotipo} height="150px" alt="Logotipo"/>
        </div>
        <Layer bg={strawberry} position={210}>produtos</Layer>
        <Layer bg={sprinkles} position={140}>encomendas</Layer>
        <Layer bg={chocolate} position={70}>contato</Layer>
        <Layer bg={cream} position={0}>local</Layer>
      </div>
    </>
  )
}

export default Home;