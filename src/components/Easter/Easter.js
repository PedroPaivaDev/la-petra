import React from 'react';
import styles from './Easter.module.css';

import Button from '../Forms/Button';
import EasterProduct from './EasterProduct';
import { useNavigate } from 'react-router-dom';

import ModalEasterProduct from './ModalEasterProduct';
import Grid from '../Grid/Grid';
import { getProducts } from '../../services/firebase';

const Easter = () => {
  const [eggs, setEggs] = React.useState();
  const [truffles, setTruffles] = React.useState();
  const [kids, setKids] = React.useState();
  const [others, setOthers] = React.useState();
  const [modalProduct, setModalProduct] = React.useState(null);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/order");
  }

  React.useEffect(() => {
    getProducts('eggs', setEggs);
    getProducts('truffles', setTruffles);
    getProducts('kids', setKids);
    getProducts('others', setOthers);
  },[])
  
  return (
    <div className={styles.container}>
      {modalProduct && 
        <ModalEasterProduct
          eggs={eggs}
          modalProduct={modalProduct}
          setModalProduct={setModalProduct}
        />
      }

      <h2>Cardápio de Páscoa</h2>
      <p>Até o dia 06 de abril, você poderá escolher sua casca: blend, ao leite, meio amargo, branca ou branca crocante de biscoito.</p>
      
      <h3>Ovos de Colher</h3>
      <p>Os ovos contém 1 banda e são feitos com casca de chocolate nobre e recheios de alta qualidade.</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 250g: 350g a 450g</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 350g: 450g a 500g</p>
      <div className={styles.products}>
        {eggs && eggs.map((egg) => (
          <Grid key={egg.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={egg} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>

      <h3>Cascas Trufadas</h3>
      <p>Duas bandas feitas com chocolate nobre recheados com cremes de alta qualidade.</p>
      <div className={styles.products}>
        {truffles && truffles.map((truffle) => (
          <Grid key={truffle.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={truffle} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>

      <h3>Linha Kids</h3>
      <p>Ovos feitos com chocolate nobre e recheios de alta qualidade.</p>
      <div className={styles.products}>
        {kids && kids.map((kid) => (
          <Grid key={kid.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={kid} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>

      <h3>Para Presentear</h3>
      <p>Produtos feitos com chocolate nobre e recheios de alta qualidade.</p>
      <div className={styles.products}>
        {others && others.map((other) => (
          <Grid key={other.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={other} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>

      <Button onClick={handleClick}>Finalizar Pedido</Button>
    </div>
  )
}

export default Easter;