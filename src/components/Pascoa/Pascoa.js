import React from 'react';
import styles from './Pascoa.module.css';

// import mobileCheck from '../../services/mobileCheck';

const Pascoa = () => {
  // texto = window.encodeURIComponent(texto);
  // window.open(urlApi + "?phone=" + celular + "&text=" + texto, "_blank");
  
  function handleSubmit(event) {
    event.preventDefault();
    const numberContact = 553799237253;
    let urlApi = 'http://api.whatsapp.com/send';

    // if(mobileCheck()){
    //   urlApi = "https://api.whatsapp.com/send";
    // }

    const name = 'Pedro';
    const pedido = 'quero muitos ovos';
    const acres = 'blabla';
    

    window.location = `
      ${urlApi}?phone=${numberContact}&text= 
      Cliente: ${name}%0a
      Pedido: ${pedido}%0a
      Acréscimos: ${acres}
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
        <form onSubmit={handleSubmit}>
          <button>Enviar Pedido</button>
        </form>
      </div>
    </div>
  )
}

export default Pascoa;