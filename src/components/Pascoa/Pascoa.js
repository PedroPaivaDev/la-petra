import React from 'react';
import styles from './Pascoa.module.css';

import useMediaQuery from '../../hooks/useMediaQuery';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';

const Pascoa = () => {
  const client = useForm();
  const contact = useForm('contact');
  const width = useMediaQuery();
  
  function handleSubmit(event) {
    event.preventDefault();
    const numberContact = 553799237253;
    let urlApi = 'http://web.whatsapp.com/send';

    if(width[0]<914){
      urlApi = "https://api.whatsapp.com/send";
    }    

    window.location = `
      ${urlApi}?phone=${numberContact}&text=Cliente: ${client.value}%0aContato: ${contact.value}%0a
    `;
  }
  
  return (
    <div className={styles.container}>
      <h2>Cardápio de Páscoa</h2>
      <div className={styles.product}>
        <h3>Ovos de Colher</h3>
        <p>Deliciosos ovos (contém 1 banda), feitos com casca de chocolate nobre e recheios de alta qualidade.</p>
        <p>Até o dia 06/04, você poderá escolher sua casca: blend, ao leite, meio amargo, branca ou branca crocante de biscoito.</p>
        <p>Peso aproximado do ovo com casca de 250g: 350g a 450g</p>
        <p>Peso aproximado do ovo com casca de 350g: 450g a 500g</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input label="Cliente:" type="text" name="client" {...client} />
          <Input label="Contato:" type="text" name="contact" {...contact} />
          <button className={styles.button}>Enviar Pedido</button>
        </form>
      </div>
    </div>
  )
}

export default Pascoa;