import React from 'react';
import styles from './Order.module.css';

import useForm from '../../hooks/useForm';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BagContext } from '../../contexts/BagContext';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import DatePickerInput from '../../components/Forms/DatePickerInput';
import Select from '../../components/Forms/Select';
import useLocalStorage from '../../hooks/useLocalStorage';

import Grid from '../../components/Grid/Grid';
import Product from '../../components/Products/Product';
import Checkbox from '../../components/Forms/Checkbox';

const Order = () => {
  const [bag] = React.useContext(BagContext);

  const [submitError, setSubmitError] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const client = useForm('client', '');
  const contact = useForm('contact', '', 'contact');
  const [withdrawalDate, setWithdrawalDate] = useLocalStorage('date', '');
  const [withdrawalHour, setWithdrawalHour] = useLocalStorage('hour', '');
  const [payment, setPayment] = useLocalStorage('payment', '');
  const [installmentCard, setInstallmentCard] = React.useState('');
  const [delivery, setDelivery] = useLocalStorage('delivery', '');
  const street = useForm('street', '');
  const number = useForm('number', '');
  const neighborhood = useForm('neighborhood', '');
  const reference = useForm('reference', '');

  const installmentCardPayment = {
    0.065: 2,
    0.073: 3,
    0.08: 4,
    0.087: 5
  }

  const width = useMediaQuery();

  function formatDateFn(dateHour) {
    const select = new Date(dateHour)
    return select.getDate() + "/"+ parseInt(select.getMonth()+1) +"/"+ select.getFullYear();
  }

  function mapProducts() {
    let products = "";
    bag.forEach(product => {
      const type = product.type ? `${product.type}: ` : "";
      const name = `*${product.name}*%0a`;
      const size = `Tamanho: *${product.size}*%0a`;
      const option = product.options ? `Casca: *${product.options}*%0a` : "";
      const flavor = product.flavors ? `Sabor: *${product.flavors}*%0a` : "";
      const price = `Preço Unitário: *R$${product.price.toFixed(2)}*%0a----------%0a`;

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

    const header = `_Código do Pedido: ${Date.now()}_%0a_Cliente: ${client.value}_%0a_Contato: ${contact.value}_%0a`;
    const pay = `_Forma de Pagamento: ${payment}${installmentCard ? ` ${installmentCardPayment[installmentCard]}x` : ''}_%0a`;
    const date = `_Data de retirada: ${formatDateFn(withdrawalDate)}`;
    const hour = ` as ${withdrawalHour}_%0a`
    const deliveryAddress = delivery ? `_*Entregar no endereço*: Rua ${street.value}, ${number.value}, Bairro ${neighborhood.value}. Ponto de referência: ${reference.value}._%0a` : '_*Retirada na Loja*_%0a';

    const mappedProducts = mapProducts();
    
    if(client.value.length<=0 || contact.value.length<=0 || client.error || contact.error || totalPrice===0 || withdrawalDate==='' || withdrawalHour==='' || payment==='' || (payment==="Cartão de Crédito (parcelado)" && installmentCard==='') || (delivery && (street.value.length<=0 || number.value.length<=0 || neighborhood.value.length<=0))) {
      setSubmitError(true);
      return;
    } else {
      setSubmitError(false);
      window.open(`${urlApi}?phone=${storeNumber}&text=${header}%0a${mappedProducts}%0a${pay}${date}${hour}${deliveryAddress}_Preço Total: *R$${totalPrice.toFixed(2)}*_`, "_blank");
    }
  }

  React.useEffect(() => {
    let sumPrices = delivery ? 5 : 0;
    if(payment==="Cartão de Crédito (parcelado)") {
      bag && bag.forEach(product => {
        sumPrices = sumPrices + product.price;
      })
      setTotalPrice(sumPrices + sumPrices * installmentCard);
    } else {
      bag && bag.forEach(product => {
        sumPrices = sumPrices + product.price;
      })
      setTotalPrice(sumPrices);
    }
  }, [bag, payment, installmentCard, delivery])

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitError(false);
    },4000)
  },[submitError])

  return (
    <div className={`page animeLeft`}>
      <div className={`container`}>
        <div className={`envelope`}>
          <h1>Finalizar Pedido</h1>

          <div className={styles.products}>
            {bag.length!==0 ? bag.map(product => 
              <Grid key={product.id} xs={12} sm={6} md={4} lg={4} xl={3}>
                <Product product={product}/>
              </Grid>) :
              <p style={{color: '#f31'}}>Sua sacola ainda está vazia. Escolha pelo menos um produto.</p>
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
                options={['16:00h','17:00h','18:00h']}
                selectedOption={withdrawalHour} setSelectedOption={setWithdrawalHour}
              />
              <Select
                label={"Pagamento:"}
                initial="Escolha a forma"
                options={["Transferência", "Pix", "Cartão de Débito", "Dinheiro", "Cartão de Crédito (parcelado)"]}
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
            </form>
            <div className={styles.payment}>
              <Checkbox
                option={true}
                state={delivery}
                setState={setDelivery}
                name="delivery"
                label={"Pagar pela entrega (+R$5,00)"}
              />
              {delivery && <div className={styles.deliveryAddress}>
                <Input label="Rua/Av:" type="text" name="street"
                  placeholder={"Informe a rua"} {...street}
                />
                <Input label="Nº:" type="text" name="number"
                  placeholder={"Informe o número"} {...number}
                />
                <Input label="Bairro:" type="text" name="neighborhood"
                  placeholder={"Informe o bairro"} {...neighborhood}
                />
                <Input label="Ref.:" type="text" name="reference"
                  placeholder={"Ponto de referência"} {...reference}
                />
              </div>}
              {(installmentCard!=="" && payment==="Cartão de Crédito (parcelado)") ?
                <h1 className={styles.price}>{installmentCardPayment[installmentCard]} Parcelas de <span>
                  R${(totalPrice/installmentCardPayment[installmentCard]).toFixed(2)}
                </span></h1> :
                <h1 className={styles.price}>Preço Total: <span>R${totalPrice.toFixed(2)}</span></h1>
              }
            </div>
          </div>

          <div className='wrapper'>
            {payment==="Cartão de Crédito (parcelado)" ?
              <p>Após clicar no botão de envio abaixo, você será direcionado para o whatsapp da loja. Para confirmar o seu pedido, você deverá <b>ir até a loja</b> para efetuar o parcelamento no cartão <b>ou</b> solicitar que a máquina de cartão da loja seja levada até você.</p> :
              <p>Após clicar no botão de envio abaixo, você será direcionado para o whatsapp da loja. A confirmação do seu pedido será feita após o envio do comprovante de pagamento de <b>50% do valor adiantado</b>.</p>
            }
            {!delivery ?
              <p><b>Não faremos a entrega</b>, então o cliente deve fazer a retirada na loja, no dia {formatDateFn(withdrawalDate)} as {withdrawalHour}, pessoalmente ou informar com antecedência o nome do terceiro autorizado para retirada.</p> :
              <div>
                <p>O pedido <b>será entregue no endereço</b> informado acima, no dia {formatDateFn(withdrawalDate)} as {withdrawalHour}. Caso o cliente não esteja no local, sob o dia e data definidos anteriormente, o pedido será retornado para a loja e o cliente deverá fazer a retirada na loja pessoalmente ou informar com antecedência o nome do terceiro autorizado para retirada.</p>
                <p style={{color: '#f31'}}><b style={{color: '#f31'}}>ATENÇÃO!!!</b> Dependendo do tipo, não nos responsabilizamos pela integridade dos produtos durante o percurso da entrega, pois ela é feita usando uma moto.</p>
              </div>
            }          
            <p>Não vamos nos responsabilizar pelo armazenamento, caso o cliente não venha buscar na data e horário combinado.</p>
          </div>
          <Button onClick={handleSubmit} submitError={submitError}>Enviar Pedido</Button>
        </div>
      </div>
    </div>
  )
}

export default Order;