import React from 'react';
import styles from './Order.module.css';

import useForm from '../../hooks/useForm';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BagContext } from '../../contexts/BagContext';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import Grid from '../../components/Grid/Grid';
import useLocalStorage from '../../hooks/useLocalStorage';

import EasterProduct from '../../components/Easter/EasterProduct';
import DatePickerInput from '../../components/Forms/DatePickerInput';
import Select from '../../components/Forms/Select';

const Order = () => {
  const [bag] = React.useContext(BagContext);

  const [submitError, setSubmitError] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const client = useForm(false, 'client', "");
  const contact = useForm('contact', 'contact', "");
  const [withdrawalDate, setWithdrawalDate] = useLocalStorage('date', '');
  const [withdrawalHour, setWithdrawalHour] = useLocalStorage('hour', '');
  const [payment, setPayment] = useLocalStorage('payment', '');
  const [installmentCard, setInstallmentCard] = useLocalStorage('installment','');

  const installmentCardPayment = {
    0.065: '2x',
    0.073: '3x',
    0.08: '4x',
    0.087: '5x'
  }

  const width = useMediaQuery();

  function mapProducts() {
    let products = "";
    bag.forEach(product => {
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

    const storeNumber = 5537988031002;
    let urlApi = 'http://web.whatsapp.com/send';
    if(width[0]<914){
      urlApi = "https://api.whatsapp.com/send";
    }

    function formatDateFn(dateHour) {
      const select = new Date(dateHour)
      return select.getDate() + "/"+ parseInt(select.getMonth()+1) +"/"+ select.getFullYear();
    }

    const header = `_Código do Pedido: ${Date.now()}_%0a_Cliente: ${client.value}_%0a_Contato: ${contact.value}_%0a`;
    const pay = `Forma de Pagamento: ${payment} ${installmentCard ? installmentCardPayment[installmentCard] : ''}%0a`;
    const date = `Data de retirada: ${formatDateFn(withdrawalDate)}`;
    const hour = ` as ${withdrawalHour}%0a`

    const mappedProducts = mapProducts();
    
    if(client.value.length<=0 || contact.value.length<=0 || client.error || contact.error || totalPrice===0 || withdrawalDate==='' || withdrawalHour==='' || payment==='' || (payment==="Cartão de Crédito (parcelado)" && installmentCard==='')) {
      setSubmitError(true);
      return;
    } else {
      setSubmitError(false);
      window.open(`${urlApi}?phone=${storeNumber}&text=${header}%0a${mappedProducts}${pay}${date}${hour}_Preço Total: *R$${totalPrice.toFixed(2)}*_`, "_blank");
    }
  }

  React.useEffect(() => {
    let sumPrices = 0;
    if(installmentCard==='') {
      bag && bag.forEach(product => {
        sumPrices = sumPrices + product.price;
      })
      setTotalPrice(sumPrices);
    } else {
      bag && bag.forEach(product => {
        sumPrices = sumPrices + product.price;
      })
      setTotalPrice(sumPrices + sumPrices/2*installmentCard);
    }
  }, [bag, installmentCard])

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitError(false);
    },4000)
  },[submitError])

  return (
    <div className={styles.container}>
      <h2>Finalizar Pedido</h2>

      <div className={styles.products}>
        {bag.length!==0 ? bag.map(product => 
          <Grid key={product.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <EasterProduct product={product}/>
          </Grid>) : 
          <p>Sua sacola ainda está vazia...</p>
        }
      </div>
      
      <div className={styles.order}>
        <form className={styles.form}>
          <Input label="Nome:" type="text" name="client"
            placeholder={"Digite seu nome"} {...client}
          />
          <Input label="Contato:" type="text" name="contact"
            placeholder={"(37) 9 9999-9999"} {...contact}
          />
          <DatePickerInput
            label="Retirada:"
            placeholder="Selecione a data"
            selectedDate={withdrawalDate}
            setSelectedDate={setWithdrawalDate}
          />
          <Select
            label={"Hora:"}
            initial="Selecione a hora"
            options={['15:00h','16:00h','17:00h','18:00h']}
            selectedOption={withdrawalHour} setSelectedOption={setWithdrawalHour}
          />
        </form>
        <div className={styles.payment}>
          <Select
            label={"Pagamento:"}
            initial="Escolha a forma"
            options={["Transferência (total)", "Pix (total)", "Cartão de Débito (total)", "Dinheiro (total)", "Cartão de Crédito (parcelado)"]}
            selectedOption={payment} setSelectedOption={setPayment}
          />
          {payment==="Cartão de Crédito (parcelado)" &&
            <Select
              label={"Parcelas:"}
              initial="Selecione aqui"
              options={["2x", "3x", "4x", "5x"]}
              value={Object.keys(installmentCardPayment)}
              selectedOption={installmentCard} setSelectedOption={setInstallmentCard}
            />
          }
          <h2>Preço Total: <span style={{fontSize: '1.5rem', color: `var(--darkCyan)`}}>R${totalPrice.toFixed(2)}</span></h2>
        </div>
      </div>

      <div className={styles.notes}>
        <p>Após clicar no botão de envio abaixo, você será direcionado para o whatsapp da loja. A confirmação do seu pedido será feita após o envio do comprovante de pagamento de <b>50% do valor adiantado</b>.</p>
        <p><b>Não faremos entregas</b>, o cliente deve fazer a retirada na loja pessoalmente, dentro do período informado e data combinada, ou informar com antecedência o nome do terceiro autorizado para retirada.</p>
      </div>
      <Button onClick={handleSubmit} submitError={submitError}>Enviar Pedido</Button>
    </div>
  )
}

export default Order;