import React from 'react';
import { registerProductOrder, createNewProduct } from '../../services/firebase';

import Button from '../../components/Forms/Button';

const Admin = () => {
  
  function create() {
    const id = 0;
    const name = 'Fatia coco';
    const description = 'Fatia coco com doce de leite';
    const price = 13;
    const image = "https://raw.githubusercontent.com/PedroPaivaDev/la-petra/v0.2/src/assets/easter/ovoDeliciaCrocante-1.jpg";
    createNewProduct(id, name, description, price, image);
  }

  function order() {
    const id = 0;
    const name = 'Fatia coco';
    const description = 'Fatia coco com doce de leite';
    const price = 50;
    const image = "https://raw.githubusercontent.com/PedroPaivaDev/la-petra/v0.2/src/assets/easter/ovoDeliciaCrocante-1.jpg";
    registerProductOrder(id, name, description, price, image);
  }

  return (
    <div>
      <Button onClick={create}>Adicionar produto</Button>
      <Button onClick={order}>Registrar Pedido</Button>
    </div>
  )
}

export default Admin;