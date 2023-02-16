import React from 'react';
import styles from './Contact.module.css';

import goomer from '../../assets/icons/iconGoomer.png';
import ifood from '../../assets/icons/iconIfood.png';
import whatsapp from '../../assets/icons/iconWhatsapp.png';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Horários de Funcionamento</h2>
      <p>Terça a Sábado: 12:30h às 18:00h</p>
      <p>Domingo: 11:30h às 14:30h</p>
      <p style={{color: 'tomato'}}>Não abre na segunda-feira</p>
      
      <h2>Contato</h2>
      <a href='https://l-petra.goomer.app/' target="_blank">
        <img src={goomer} alt="goomer"/>
        Peça mais barato aqui
      </a>
      <a href='https://www.ifood.com.br/delivery/bom-despacho-mg/la-petra-novo-sao-jose/ffb8ee69-9fd7-46bb-81d1-7a3a290d80db?utm_medium=share' target="_blank">
        <img src={ifood} alt="goomer"/>
        Peça pelo Ifood
      </a>
      <a href='https://api.whatsapp.com/send/?phone=5537988031002&text&type=phone_number&app_absent=0' target="_blank">
        <img src={whatsapp} alt="goomer"/>
        Encomende seu bolo personalizado
      </a>

      <h2>Localização</h2>
      <p>Av. Doutor Roberto de Melo Queiroz</p>
      <p>Número ..., Bairro Novo São José</p>
      <p>Bom Despacho / MG</p>
    </div>
  )
}

export default Contact;