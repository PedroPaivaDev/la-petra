import React from 'react';
import styles from './Layer.module.css';
import {Link} from 'react-router-dom';

const Layer = ({children, bg, position}) => {
  return (
    <div className={styles.layer} style={{
      "--layerPosition": `${position+5}px`,
      "--layerTiming": `${position+1000}ms`
      }}>
      <Link to={children}>{children}</Link>
      <img src={bg} alt={position}/>
    </div>
  )
}

export default Layer;