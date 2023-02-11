import React from 'react';
import styles from './Layer.module.css';

const Layer = ({children, bg, position}) => {
  return (
    <div className={styles.layer} style={{
      "--layerPosition": `${position}px`,
      "--layerTiming": `${position+1000}ms`
      }}>
      <h4>{children}</h4>
      <img src={bg} alt={position}/>
    </div>
  )
}

export default Layer;