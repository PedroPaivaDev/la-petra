import React from 'react';
import { BagContext } from '../../contexts/BagContext';
import Button from '../Forms/Button';
import styles from './ContentEasterProduct.module.css';

const ContentEasterProduct = ({modalProduct}) => {
  
  const [bag, setBag] = React.useContext(BagContext);
  const [submitSucess, setSubmitSucess] = React.useState(false);

  function handleCLick() {
    setSubmitSucess(true);
    const newModalProduct = {...modalProduct, id:Date.now()}
    setBag([...bag, newModalProduct])
  }

  React.useEffect(() => {
    setTimeout(() => {
      setSubmitSucess(false);
    },4000)
  },[submitSucess])

  return (
    <div className={styles.container}>
      <div className={styles.image} style={{background: `url(${modalProduct.image[0]}) no-repeat center center`,backgroundSize: "cover"}}/>
      <div className={styles.description}>
        <div className={styles.image} style={{background: `url(${modalProduct.image[1]}) no-repeat center center`,backgroundSize: "cover"}}/>
        <h4>{modalProduct.name}</h4>
        <p>{modalProduct.description}</p>
        <div className={styles.prices}>
          <div>
            <h6>Peso final aprox. {modalProduct.sizesm.weight}g</h6>
            <h4 className={styles.price}>R${modalProduct.sizesm.price.toFixed(2)}</h4>
          </div>
          {modalProduct.sizelg && <div>
            <h6>Peso final aprox. {modalProduct.sizelg.weight}g</h6>
            <h4 className={styles.price}>R${modalProduct.sizelg.price.toFixed(2)}</h4>
          </div>}
        </div>
        <Button onClick={handleCLick} submitSucess={submitSucess}>Adicionar à Sacola</Button>
      </div>
    </div>
  )
}

export default ContentEasterProduct;