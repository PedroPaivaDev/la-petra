import React from 'react';

const ImgCarousel = ({img}) => {
  return (
    <div style={{background: `url(${img}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center", width: `100%`, height: `100%`}}/>
  )
}

export default ImgCarousel;