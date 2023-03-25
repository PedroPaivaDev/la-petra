import React from 'react';
import styles from './ContentEasterProduct.module.css';

import { BagContext } from '../../contexts/BagContext';
import Button from '../Forms/Button';
import Select from '../Forms/Select';
import InputRadio from '../Forms/InputRadio';

const ContentEasterProduct = ({modalProduct}) => {
  
  const [bag, setBag] = React.useContext(BagContext);
  const [submitSucess, setSubmitSucess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [option, setOption] = React.useState('');
  const [flavor, setFlavor] = React.useState('');
  const [size, setSize] = React.useState();
  const [modifiedProduct, setModifiedProduct] = React.useState(modalProduct);

  function handleCLick() {
    if((modalProduct.options && option==='') || (modalProduct.flavors && flavor==='') || (modalProduct.sizelg && !size)) {
      setSubmitError(true);
    } else {
      setSubmitSucess(true);
      const newModalProduct = {...modifiedProduct,
        id: Date.now(),
        options: option,
        flavors: flavor,
        size: chosedSize(),
        price: chosedPrice()
      }
      setBag([...bag, newModalProduct])
    }
    function chosedSize() {
      if(size) {
        return size;
      } else {
        return "Único";
      }
    }
    function chosedPrice() {
      if(!size || size==="Pequeno") {
        return modifiedProduct.sizesm.price;
      } else {
        return modifiedProduct.sizelg.price;
      }
    }
  }

  React.useEffect(() => {
    if(option==="Branco" || option==="Branco Crocante") {
      if(modifiedProduct.sizelg) {
        setModifiedProduct({
          ...modifiedProduct, 
            sizesm:{...modifiedProduct.sizesm,price: modalProduct.sizesm.price + 3},
            sizelg:{...modifiedProduct.sizelg,price: modalProduct.sizelg.price + 3}
        });
      } else {
        setModifiedProduct({
          ...modifiedProduct, 
            sizesm:{...modifiedProduct.sizesm,price: modalProduct.sizesm.price + 3}
        });
      }
    } else {
      setModifiedProduct(modalProduct)
    }
  }, [option])

  React.useEffect(() => {
    if(submitSucess || submitError) {
      setTimeout(() => {
        setSubmitSucess(false);
        setSubmitError(false);
      },2000)
    }
  },[submitSucess, submitError])

  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${modifiedProduct.image[0]}) no-repeat center center`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <div className={styles.image} style={{background: `url(${modifiedProduct.image[1]}) no-repeat center center`,backgroundSize: "cover"}}/>
        <span>{modifiedProduct.name}</span>
        <p>{modifiedProduct.description}</p>

        {modifiedProduct.flavors && 
          <div className={styles.options}>
            <p>Sabores:</p>
              <Select initial="Selecione Aqui" options={modifiedProduct.flavors} selectedOption={flavor} setSelectedOption={setFlavor}/>
          </div>
        }

        {modifiedProduct.options && 
          <div className={styles.options}>
            <p>Escolha a Casca:</p>
              <Select initial="Selecione Aqui" options={modifiedProduct.options} selectedOption={option} setSelectedOption={setOption}/>
          </div>
        }

        <div className={styles.prices}>
          <div className={styles.size}>
            <h6>Peso final aprox. {modifiedProduct.sizesm.weight}g</h6>
            {modifiedProduct.sizelg ?
              <InputRadio
                option={modifiedProduct.sizesm.price}
                state={size}
                setState={setSize}
                name="Pequeno"
                className={styles.price}
              /> :
              <span className={styles.price}>
                R${modifiedProduct.sizesm.price.toFixed(2)}
              </span>
            }
          </div>
          {modifiedProduct.sizelg && <div className={styles.size}>
            <h6>Peso final aprox. {modifiedProduct.sizelg.weight}g</h6>
            <InputRadio
              option={modifiedProduct.sizelg.price}
              state={size}
              setState={setSize}
              name="Grande"
              className={styles.price}
            />
          </div>}
        </div>

        <Button onClick={handleCLick} submitSucess={submitSucess} submitError={submitError}>
          Adicionar à Sacola
        </Button>

      </div>
    </div>
  )
}

export default ContentEasterProduct;