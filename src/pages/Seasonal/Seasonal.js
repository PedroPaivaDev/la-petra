import React from 'react';
import styles from './Seasonal.module.css';

import Easter from '../../components/Easter/Easter';

const Seasonal = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      <Easter/>
    </div>
  )
}

export default Seasonal;