import React from 'react';
import styles from './Seasonal.module.css';

import Easter from '../Easter/Easter';

const Seasonal = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      {new Date() > new Date("2023-04-07T03:00:00.000Z") ?
        <p style={{margin: '30px', textAlign:'justify'}}>O prazo para encomendar produtos de páscoa já passou, mas não fique triste, temos deliciosos doces a pronta entrega, para você deliciar-se ou dar de presente.</p> :
        <Easter/>
      }
    </div>
  )
}

export default Seasonal;