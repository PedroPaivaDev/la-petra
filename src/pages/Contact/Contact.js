import React from 'react';
import styles from './Contact.module.css';

import goomer from '../../assets/icons/iconGoomer.png';
import ifood from '../../assets/icons/iconIfood.png';
import whatsapp from '../../assets/icons/iconWhatsapp.png';
import instagram from '../../assets/icons/iconInstagram.png';

import Cloche from '../../components/Cloche/Cloche';

const Contact = () => {

  let deviceHeight = window.screen.height;

  return (
    <div className={`${styles.container} animeLeft`}>
      <h2>Horários de Funcionamento</h2>
      <p>Terça a Sábado: 12:30h às 18:00h</p>
      <p>Domingo: 11:30h às 14:30h</p>
      <p style={{color: 'tomato'}}>Não abre na segunda-feira</p>
      
      <div className={styles.contact}>
        <h2>Clique para Pedir</h2>
        <a href='https://l-petra.goomer.app/' target="_blank" rel="noreferrer">
          <img src={goomer} alt="goomer"/>
          Peça mais barato aqui
        </a>
        <a href='https://www.ifood.com.br/delivery/bom-despacho-mg/la-petra-novo-sao-jose/ffb8ee69-9fd7-46bb-81d1-7a3a290d80db?utm_medium=share' target="_blank" rel="noreferrer">
          <img src={ifood} alt="ifood"/>          
          Peça pelo Ifood
        </a>
        <a href='https://api.whatsapp.com/send/?phone=5537988031002&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp"/>
          Encomende bolos personalizados
        </a>
        <a href='https://www.instagram.com/lapetradoceria/' target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram"/>
          Instagram
        </a>
      </div>

      <h2>Localização</h2>
      <p>Av. Doutor Roberto de Melo Queiroz</p>
      <p>Número ..., Bairro Novo São José</p>
      <p>Bom Despacho / MG</p>

      {deviceHeight>850 && <Cloche/>}
    </div>
  )
}

export default Contact;