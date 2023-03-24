import React from 'react';
import styles from './ContentEasterProduct.module.css';

import { BagContext } from '../../contexts/BagContext';
import Button from '../Forms/Button';
import Select from '../Forms/Select';

const ContentEasterProduct = ({modalProduct}) => {
  
  const [bag, setBag] = React.useContext(BagContext);
  const [submitSucess, setSubmitSucess] = React.useState(false);
  const [option, setOption] = React.useState('');
  const [modifiedProduct, setModifiedProduct] = React.useState(modalProduct);

  function handleCLick() {
    setSubmitSucess(true);
    const newModalProduct = {...modifiedProduct, id:Date.now()}
    setBag([...bag, newModalProduct])
  }  

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitSucess(false);
    },4000)
  },[submitSucess])

  React.useEffect(() => {
    if(option==="Branco" || option==="Branco Crocante") {
      setModifiedProduct({
        ...modifiedProduct, 
          ["sizesm"]:{...modifiedProduct["sizesm"],price: modalProduct["sizesm"].price + 3},
          ["sizelg"]:{...modifiedProduct["sizelg"],price: modalProduct["sizelg"].price + 3}
      });
    } else {
      setModifiedProduct(modalProduct)
    }
  }, [option])

  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${modifiedProduct.image[0]}) no-repeat center center`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <div className={styles.image} style={{background: `url(${modifiedProduct.image[1]}) no-repeat center center`,backgroundSize: "cover"}}/>
        <h4>{modifiedProduct.name}</h4>
        <p>{modifiedProduct.description}</p>

        <div className={styles.options}>
          <p>Escolha a Casca:</p>
          {modifiedProduct.options && 
            <Select initial="Selecione Aqui" options={modifiedProduct.options} selectedOption={option} setSelectedOption={setOption}/>
          }
        </div>

        <div className={styles.prices}>
          <div>
            <h6>Peso final aprox. {modifiedProduct.sizesm.weight}g</h6>
            <h4 className={styles.price}>R${modifiedProduct.sizesm.price.toFixed(2)}</h4>
          </div>
          {modifiedProduct.sizelg && <div>
            <h6>Peso final aprox. {modifiedProduct.sizelg.weight}g</h6>
            <h4 className={styles.price}>R${modifiedProduct.sizelg.price.toFixed(2)}</h4>
          </div>}
        </div>

        <Button onClick={handleCLick} submitSucess={submitSucess}>Adicionar à Sacola</Button>
        
      </div>
    </div>
  )
}

export default ContentEasterProduct;