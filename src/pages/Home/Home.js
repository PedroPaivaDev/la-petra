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
    <div className={styles.cup}>
      <div className={styles.layers}>
        <div className={styles.logo} onClick={() => navigate('sobre')}>
          <img src={Logotipo} height="180px" alt="Logotipo"/>
        </div>
        <Layer bg={strawberry} position={270}>produtos</Layer>
        <Layer bg={sprinkles} position={180}>encomendas</Layer>
        <Layer bg={chocolate} position={90}>contato</Layer>
        <Layer bg={cream} position={0}>local</Layer>
      </div>
    </div>
  )
}

export default Home;