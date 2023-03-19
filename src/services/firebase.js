// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import Admin SDK
import { getDatabase, ref, set, child, push, onValue, remove, update } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdhM5mBOnnQnIS_2vgWd9_sMfvcpRZ4o4",
  authDomain: "db-la-petra.firebaseapp.com",
  databaseURL: "https://db-la-petra-default-rtdb.firebaseio.com",
  projectId: "db-la-petra",
  storageBucket: "db-la-petra.appspot.com",
  messagingSenderId: "410275294691",
  appId: "1:410275294691:web:c98eacc45962af779b44d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

//----------------------------------------

//MÉTODOS CRIADOS:

//Para criar novos produtos
export function createNewProduct(id, name, description, price, image) {
  const productsRef = ref(db, 'products');
  const product = {
    id: id,
    name: name,
    description: description,
    price: price,
    image: image
  };
  set(child(productsRef,`${id}`), product)
}

//Para registrar pedidos de clientes
export function registerProductsOrder(name, description, price, image) {
  const ordersRef = ref(db, 'productsOrders');
  const product = {
    name: name,
    description: description,
    price: price,
    image: image
  };
  push(ordersRef, product)
}

//Para buscar os produtos no DB
export function getProducts(setState) {
  const productsRef = ref(db, 'products');
  let products = [];
  onValue(productsRef, (snapshot) => {
    snapshot.forEach(product => {
      products = [...products, product.val()]
    })
    setState(products)
    console.log(products)
  }, {onlyOnce: true})
}

//Para remover produtos
export function removeProduct(id) {
  const productsRef = ref(db, 'products/' + id);
  remove(productsRef).then(() => {
    console.log(`excluído o item ${id}`)
  });
  // set(productsRef, null).then(() => {
  //   console.log(`excluído o item ${id}`)
  // });
}

//Para atualizar produtos
export function changeProductPrice(id, newPrice) {
  const productsRef = ref(db, 'products/' + id);
  update(productsRef, {price: newPrice}).then(() => {
    console.log(`o preço do produto de id: ${id}, foi alterado para ${newPrice}`)
  });
}