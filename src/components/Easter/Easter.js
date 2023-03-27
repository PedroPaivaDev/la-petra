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
      <p>Até o dia <b>06 de abril</b>, você poderá escolher sua casca: blend, ao leite, meio amargo, branca ou branca crocante de biscoito.</p>
      <p>Retiradas das encomendas na loja entre os dias <b>14/03</b> a <b>08/04</b>, de terça a sábado. Agende sua data no ato da encomenda. Os horários para retirada serão no período das <b>15h</b> as <b>18h</b></p>

      <h3>Armazenamento e Durabilidade</h3>
      <p>Nossos ovos são feitos artesanalmente com chocolate nobre, eles devem ser mantidos sob-refrigeração e consumidos em <b>até 4 dias</b>, com exceção dos ovos que contém morangos frescos, que devem ser consumidos em <b>até 2 dias</b>.</p>
      <p>Não vamos nos responsabilizar pelo armazenamento, caso o cliente não venha buscar na data e horário combinado.</p>
      <p>Para uma maior cremosidade, recomendamos que retire seu ovo da geladeira cerca de 40 minutos antes de consumir.</p>
      
      <h3>Ovos de Colher</h3>
      <p>Os ovos contém 1 banda e são feitos com casca de chocolate nobre e recheios de alta qualidade.</p>
      <p>Todos os ovos são embalados e entregues em sacolas para presentear.</p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 250g: <b style={{fontSize: "0.625rem"}}>350g a 450g</b></p>
      <p style={{fontSize: "0.625rem"}}>Peso aproximado do ovo com casca de 350g: <b style={{fontSize: "0.625rem"}}>450g a 500g</b></p>
      <div className={styles.products}>
        {eggs && eggs.map((egg) => (
          <Grid key={egg.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={egg} setModalProduct={setModalProduct}/>
          </Grid>
        ))}
      </div>

      <h3>Cascas Trufadas</h3>
      <p>Duas bandas feitas com chocolate nobre recheados com cremes de alta qualidade.</p>
      <p>Peso médio aproximado das 2 cascas de <b>250g a 400g</b></p>
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