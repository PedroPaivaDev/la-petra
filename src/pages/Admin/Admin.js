import React from 'react';
import styles from './Admin.module.css';
import { registerProductsOrder, createNewProduct, getProducts, removeProduct, changeProductPrice, ordainBy } from '../../services/firebase';

import Button from '../../components/Forms/Button';
import useForm from '../../hooks/useForm';
import Input from '../../components/Forms/Input';

const Admin = () => {
  const [products, setProducts] = React.useState();
  const [submitError, setSubmitError] = React.useState();
  const id = useForm();
  const name = useForm();
  const description = useForm();
  const price = useForm();
  const image = useForm("https://raw.githubusercontent.com/PedroPaivaDev/la-petra/v0.2/src/assets/easter/ovoDeliciaCrocante-1.jpg");

  function handleSubmit() {    
    if(id.value.length<=0 || name.value.length<=0 || description.value.length<=0 || price.value.length<=0 || image.value.length<=0) {
      setSubmitError(true);
      return true;
    } else {
      setSubmitError(false);
      return false;
    }
  }
  
  function create() {
    if(handleSubmit()) return;
    createNewProduct(id.value, name.value, description.value, price.value, image.value);
  }

  function order() {
    if(handleSubmit()) return;
    registerProductsOrder(id.value, name.value, description.value, price.value, image.value);
  }

  function showProducts() {
    getProducts(setProducts);
  }

  function remove() {
    removeProduct(id.value)
  }

  function change() {
    changeProductPrice(id.value, price.value)
  }

  function ordain() {
    ordainBy();
  }

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitError(false);
    },4000)
  },[submitError])

  return (
    <div className={styles.container}>
      <h2>Cadastro de Produtos</h2>
      <Input label="Id:" type="text" name="id" {...id}/>
      <Input label="Nome do Produto:" type="text" name="name" {...name}/>
      <Input label="Descrição:" type="text" name="description" {...description}/>
      <Input label="Preço:" type="text" name="price" {...price}/>
      <Input label="Imagem:" type="text" name="image" {...image}/>
      <Button onClick={create} submitError={submitError}>Adicionar produto</Button>
      <Button onClick={order} submitError={submitError}>Registrar Pedido</Button>
      <Button onClick={showProducts} submitError={submitError}>Ver Produtos</Button>
      <Button onClick={remove} submitError={submitError}>Remover Produto</Button>
      <Button onClick={change} submitError={submitError}>Alterar Preço</Button>
      <Button onClick={ordain} submitError={submitError}>Ordenar por Nome</Button>
    </div>
  )
}

export default Admin;