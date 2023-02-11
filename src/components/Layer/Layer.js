import React from 'react';
import styles from './Layer.module.css';

const Layer = ({children, position}) => {
  return (
    <div className={styles.layer} style={{
      "--layerPosition": `${position}px`,
      "--layerTiming": `${position+1000}ms`
      }}>
      {children}
    </div>
  )
}

export default Layer;