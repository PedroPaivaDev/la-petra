import React from 'react';

import Products from '../Products/Products';
import { getProducts } from '../../services/firebase';

const Seasonal = ({season, setSeason, setModalProduct}) => {

  React.useEffect(() => {
    getProducts('easter', setSeason);
  },[])

  return (
    <>
      {new Date() > new Date("2023-04-16T03:00:00.000Z") ?
        <p style={{margin: '30px', textAlign:'justify', maxWidth:'700px'}}>O prazo para encomendar produtos de páscoa já passou, mas não fique triste, temos deliciosos doces a pronta entrega, para você deliciar-se ou dar de presente.</p> :
        <Products category={season} setModalProduct={setModalProduct}/>
      }
    </>
  )
}

export default Seasonal;