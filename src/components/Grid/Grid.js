import React from 'react';
import './Grid.css';

const Grid = ({children, xs=12, sm, md, lg, xl, className}) => {
  return (
    <div className={`rowGrid
      ${xs && `col-xs-${xs}`}
      ${sm && `col-sm-${sm}`}
      ${md && `col-md-${md}`}
      ${lg && `col-lg-${lg}`}
      ${xl && `col-xl-${xl}`}
      ${className}
    `}>
      {children}
    </div>
  )
}

export default Grid;