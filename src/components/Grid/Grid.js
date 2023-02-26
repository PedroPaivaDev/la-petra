import React from 'react';
import './Grid.css';

const Grid = ({children, xs=12, sm, md, lg}) => {
  return (
    <div className={`
      ${xs && `col-xs-${xs}`}
      ${sm && `col-sm-${sm}`}
      ${md && `col-md-${md}`}
      ${lg && `col-lg-${lg}`}
    `}>
      {children}
    </div>
  )
}

export default Grid;