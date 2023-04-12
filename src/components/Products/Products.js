import React from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from '../Grid/Grid';
import Button from '../Forms/Button';
import Product from './Product';

const Products = ({category, setModalProduct}) => {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/order");
  }

  return (
    <div className={`container animeLeft`}>
      {category && <div className='envelope'>
        <h1>{category.title}</h1>
        <p>{category.description1}</p>
        <p>{category.description2}</p>
        {Object.keys(category.products).map(type => 
          <div key={category.products[type].title} className='wrapper'>
            <h2>{category.products[type].title}</h2>
            <p>{category.products[type].description}</p>
            <div className='row'>
              { category.products[type].products &&
                Object.keys(category.products[type].products).map((item) => (
                  <Grid key={category.products[type].products[item].id} xs={11} sm={6} md={4} lg={4} xl={3}>
                    <Product product={category.products[type].products[item]} setModalProduct={setModalProduct}/>
                  </Grid>
                ))
              }
            </div>
          </div>)
        }
      </div>}
      <Button onClick={handleClick}>Finalizar Pedido</Button>
    </div>
  );  
}

export default Products;