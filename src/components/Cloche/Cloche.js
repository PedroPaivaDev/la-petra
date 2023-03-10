import React from 'react';
import styles from './Cloche.module.css';
import { useNavigate } from 'react-router-dom';

// import Layer from '../components/Layer/Layer';

import Logotipo from '../../assets/Logotipo.png';
// import strawberry from '../assets/strawberry.jpg';
// import chocolate from '../assets/chocolate-balls.png';
// import sprinkles from '../assets/sprinkles.png';
// import cream from '../assets/cream.jpg';

const Cloche = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.cloche}></div>
      <div className={styles.layers}>
        <div className={styles.logo} onClick={() => navigate("sobre")}>
          <div className={styles.shadow}></div>
          <img src={Logotipo} height="150px" alt="Logotipo"/>
        </div>
        {/* <Layer bg={strawberry} position={0}>produtos</Layer> */}
      </div>
    </div>
  )
}

export default Cloche;