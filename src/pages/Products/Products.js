import React from 'react';
import styles from './Products.module.css';

// import { Link } from 'react-router-dom';
import Cloche from '../../components/Cloche/Cloche';

import goomer from '../../assets/icons/iconGoomer.png';
import ifood from '../../assets/icons/iconIfood.png';
import whatsapp from '../../assets/icons/iconWhatsapp.png';
import instagram from '../../assets/icons/iconInstagram.png';
// import pascoa from '../../assets/icons/iconPascoa.png';

const Products = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      <div className={styles.row}>
        <div className={styles.wrapper}>
          <h2>Horários de Funcionamento</h2>
          <p>Terça a Sábado: 12:30h às 18:00h</p>
          <p>Domingo: 11:30h às 14:30h</p>
          <p style={{color: 'tomato'}}>Não abre na segunda-feira</p>
        </div>
        
        <div className={styles.wrapper}>
          <h2>Monte sua sacola</h2>
          <p>Faça seu pedido selecionando os produtos e monte sua sacola de compras:</p>
          <Cloche/>
        </div>

        <div className={styles.contact}>
          <h2>Nossas redes</h2>
          <a href='https://l-petra.goomer.app/'>
            <img src={goomer} alt="goomer"/>
            Compre pelo Goomer
          </a>
          <a href='https://www.ifood.com.br/delivery/bom-despacho-mg/la-petra-novo-sao-jose/ffb8ee69-9fd7-46bb-81d1-7a3a290d80db?utm_medium=share'>
            <img src={ifood} alt="ifood"/>          
            Compre pelo Ifood
          </a>
          <a href='https://api.whatsapp.com/send/?phone=5537988031002&text&type=phone_number&app_absent=0'>
            <img src={whatsapp} alt="whatsapp"/>
            Encomende bolos personalizados
          </a>
          <a href='https://www.instagram.com/lapetradoceria/'>
            <img src={instagram} alt="instagram"/>
            Instagram
          </a>
          {/* <Link to='/sazonal'>
            <img src={pascoa} alt="pascoa"/>
            Faça aqui o seu pedido de Páscoa
          </Link> */}
        </div>

        <div className={styles.wrapper}>
          <h2>Localização</h2>
          <p>Av. Doutor Roberto de Melo Queiroz</p>
          <p>Número ..., Bairro Novo São José</p>
          <p>Bom Despacho / MG</p>
        </div>
      </div>
    </div>
  )
}

export default Products;