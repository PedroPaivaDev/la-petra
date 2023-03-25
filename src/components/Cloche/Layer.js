import React from 'react';
import styles from './Layer.module.css';
import {Link} from 'react-router-dom';

const Layer = ({children, bg, position}) => {
  return (
    <div className={styles.layer} style={{
      "--layerPosition": `${position}px`,
      "--layerTiming": `${position+1000}ms`
      }}>
      <Link to={children}>{children}</Link>
      <img src={bg} alt={position}/>
    </div>
  )
}

export default Layer;