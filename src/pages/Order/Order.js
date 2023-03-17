import React from 'react';
import styles from './Order.module.css';

import useForm from '../../hooks/useForm';
import useMediaQuery from '../../hooks/useMediaQuery';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';

const Order = () => {  
  const [submitError, setSubmitError] = React.useState(false);
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
    
    if(client.value.length<=0 || contact.value.length<=0 || client.error || contact.error) {
      setSubmitError(true);
      return;
    } else {
      setSubmitError(false);
      window.location = `
        ${urlApi}?phone=${numberContact}&text=Cliente: ${client.value}%0aContato: ${contact.value}%0a
      `;
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitError(false);
    },4000)
  },[submitError])

  return (
    <div className={styles.container}>
      <h2>Finalizar Pedido</h2>
      <form className={styles.form}>
        <Input label="Nome:" type="text" name="client"
          placeholder={"Digite seu nome"} {...client}
        />
        <Input label="Contato:" type="text" name="contact"
          placeholder={"(37) 9 9999-9999"} {...contact}
        />
        <Button onClick={handleSubmit} submitError={submitError}>Enviar Pedido</Button>
      </form>
    </div>
  )
}

export default Order;