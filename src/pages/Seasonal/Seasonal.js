import React from 'react';
import styles from './Seasonal.module.css';

import Pascoa from '../../components/Pascoa/Pascoa';

const Seasonal = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      <Pascoa/>
    </div>
  )
}

export default Seasonal;