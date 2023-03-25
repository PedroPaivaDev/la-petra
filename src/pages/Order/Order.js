import React from 'react';
import styles from './Order.module.css';

import useForm from '../../hooks/useForm';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BagContext } from '../../contexts/BagContext';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import Grid from '../../components/Grid/Grid';
import EasterProduct from '../../components/Easter/EasterProduct';

const Order = () => {
  const [bag] = React.useContext(BagContext);

  const [submitError, setSubmitError] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const client = useForm();
  const contact = useForm('contact');
  const width = useMediaQuery();

  function mapProducts() {
    let products = "";
    bag.map(product => {
      const type = product.type ? `${product.type}: ` : "";
      const name = `*${product.name}*%0a`;
      const size = `Tamanho: *${product.size}*%0a`;
      const option = product.options ? `Casca: *${product.options}*%0a` : "";
      const flavor = product.flavors ? `Sabor: *${product.flavors}*%0a` : "";
      const price = `Preço Unitário: *R$${product.price.toFixed(2)}*%0a%0a`;

      products = products + type + name + size + option + flavor + price
    })
    return products;
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    const storeNumber = 553799237253;
    // let urlApi = 'http://api.whatsapp.com/send'; //Para testes
    let urlApi = 'http://web.whatsapp.com/send';
    if(width[0]<914){
      urlApi = "https://api.whatsapp.com/send";
    }

    const header = `_Código do Pedido: ${Date.now()}_%0a_Cliente: ${client.value}_%0a_Contato: ${contact.value}_%0a`;

    const mappedProducts = mapProducts();
    
    if(client.value.length<=0 || contact.value.length<=0 || client.error || contact.error || totalPrice===null) {
      setSubmitError(true);
      return;
    } else {
      setSubmitError(false);
      // window.location = `
      //   ${urlApi}?phone=${storeNumber}&text=Cliente: ${client.value}%0aContato: ${contact.value}%0a
      // `;      
      window.open(`${urlApi}?phone=${storeNumber}&text=${header}%0a${mappedProducts}_Preço Total: *R$${totalPrice.toFixed(2)}*_`, "_blank");
    }
  }

  React.useEffect(() => {
    let sumPrices = 0;
    bag && bag.map(product => {
      sumPrices = sumPrices + product.price;
    })
    setTotalPrice(sumPrices);
  }, [bag])

  React.useEffect(() => {
    client.setValue('Pedro')
    contact.setValue('(37) 9 9923-7253')
  })

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitError(false);
    },4000)
  },[submitError])

  return (
    <div className={styles.container}>
      <h2>Finalizar Pedido</h2>

      <div className={styles.products}>
        {bag && bag.map(product => 
          <Grid key={product.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={product}/>
          </Grid>
        )}
      </div>

      <h2>Preço Total: <span style={{fontSize: '1.5rem', color: `var(--darkCyan)`}}>R${totalPrice.toFixed(2)}</span></h2>
      
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