import React from 'react';
import styles from './ContentProduct.module.css';

import { BagContext } from '../../contexts/BagContext';
import usePrevious from '../../hooks/usePrevious';

import Button from '../Forms/Button';
import Select from '../Forms/Select';
import InputRadio from '../Forms/InputRadio';

import Carousel from '../Carousel/Carousel';

const ContentProduct = ({modalProduct}) => {
  
  const [bag, setBag] = React.useContext(BagContext);
  const [submitSucess, setSubmitSucess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [option, setOption] = React.useState('');
  const prevOption = usePrevious(option);
  const [flavor, setFlavor] = React.useState('');
  const prevFlavor = usePrevious(flavor);
  const [size, setSize] = React.useState('');
  const [modifiedProduct, setModifiedProduct] = React.useState(modalProduct);

  function handleCLick() {
    if((modalProduct.options && option==='') || (modalProduct.flavors && flavor==='') || (Object.keys(modifiedProduct.sizes).length>1 && size.length<1)) {
      setSubmitError(true);
    } else {
      setSubmitSucess(true);
      const newModalProduct = {...modifiedProduct,
        id: Date.now(),
        options: option,
        flavors: flavor,
        size: chosedSize(),
        price: size ? modifiedProduct.sizes[size] : modifiedProduct.sizes[Object.keys(modifiedProduct.sizes)[0]]
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
  }

  function sumSelectPrice(select, state, prevState) {
    const arraySizes = Object.keys(modifiedProduct.sizes);
    let newPrices = modifiedProduct.sizes
    if(prevState) {
      for (let index = 0; index < arraySizes.length; index++) {
        newPrices =  {
          ...newPrices,
          [arraySizes[index]]: modifiedProduct.sizes[arraySizes[index]] + modifiedProduct[select][state] - modifiedProduct[select][prevState]
        }      
      }
    } else if(state) {
      for (let index = 0; index < arraySizes.length; index++) {
        newPrices =  {
          ...newPrices,
          [arraySizes[index]]: modifiedProduct.sizes[arraySizes[index]] + modifiedProduct[select][state]
        }      
      }
    }  
    return newPrices;
  }

  React.useEffect(() => {
    setModifiedProduct({
      ...modifiedProduct, sizes: sumSelectPrice('options', option, prevOption)
    });
  }, [option])

  React.useEffect(() => {
    setModifiedProduct({
      ...modifiedProduct, sizes: sumSelectPrice('flavors', flavor, prevFlavor)
    });
  }, [flavor])

  React.useEffect(() => {
    if(submitSucess || submitError) {
      setTimeout(() => {
        setSubmitSucess(false);
        setSubmitError(false);
      },2000)
    }
  },[submitSucess, submitError])

  if(modifiedProduct) return (
    <div className={styles.container}>
      <Carousel product={modifiedProduct.image} className={styles.image}/>
      <div className={styles.description}>
        <div className={styles.image} style={{background: `url(${modifiedProduct.image[1]}) no-repeat center center`,backgroundSize: "cover"}}/>
        <h3>{modifiedProduct.name}</h3>
        <p>{modifiedProduct.description}</p>

        {modifiedProduct.flavors && 
          <div className={styles.options}>
              <Select
                className={styles.select} label="Sabores: " initial="Selecione Aqui"
                selectedOption={flavor} setSelectedOption={setFlavor}
                options={Object.keys(modifiedProduct.flavors)} 
              />
          </div>
        }

        {modifiedProduct.options && 
          <div className={styles.options}>
              <Select
                className={styles.select} label="Opções: " initial="Selecione Aqui"
                selectedOption={option} setSelectedOption={setOption}
                options={Object.keys(modifiedProduct.options)}
              />
          </div>
        }

        <div className={styles.sizes}>
          {Object.keys(modifiedProduct.sizes).length<=2 ?
            Object.keys(modifiedProduct.sizes).map(productSize =>
              <div className={styles.prices} key={productSize}>
                <h5>Quantia aprox. {productSize}</h5>
                {Object.keys(modifiedProduct.sizes).length>1 ?
                  <InputRadio
                    option={modifiedProduct.sizes[productSize]}
                    state={size}
                    setState={setSize}
                    name={productSize}
                    className={styles.price}
                  /> :
                  <h4 className={styles.price}>
                    R${modifiedProduct.sizes[Object.keys(modifiedProduct.sizes)[0]].toFixed(2)}
                  </h4>
                }
              </div>
            ) :
            <div className={styles.options}>
              <Select
                className={styles.select} label="Tamanhos: " initial="Selecione Aqui"
                selectedOption={size} setSelectedOption={setSize}
                options={Object.keys(modifiedProduct.sizes)}
              />
            </div>
          }
        </div>

        {size && Object.keys(modifiedProduct.sizes).length>2 &&
          <div className={styles.prices}>
            <h4 className={styles.price}>
              R${modifiedProduct.sizes[size].toFixed(2)}
            </h4>
          </div>
        }

        <Button onClick={handleCLick} submitSucess={submitSucess} submitError={submitError}>
          Adicionar à Sacola
        </Button>

      </div>
    </div>
  )
}

export default ContentProduct;