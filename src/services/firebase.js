// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import Admin SDK
import { getDatabase, ref, set, child, push, onValue, remove, update, orderByChild, query, onChildAdded } from "firebase/database";

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
const storage = getStorage(app);

//----------------------------------------

//MÉTODOS DO STORAGE
export function urlEasterImages() {
  const easterRef = storageRef(storage, `easter/eggs/ovoBombomMorango-1.jpg`);
  getDownloadURL(storageRef(easterRef)).then((url) => console.log(url));
}

//MÉTODOS DO REALTIME DATABASE:

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

//Para buscar os produtos no DB (velho)
export function getProductsOld(path, setState) {
  const productsRef = ref(db, path);
  let products = [];
  onValue(productsRef, (snapshot) => {
    snapshot.forEach(product => {
      products = [...products, product.val()]
    })
    setState(products)
  }, {onlyOnce: true})
}
//Para buscar os produtos no DB
export function getProducts(path, setState) {
  const productsRef = ref(db, path);
  onValue(
    productsRef,
    (snapshot) => setState(snapshot.val()),
    {onlyOnce: true}
  )
}

//Para remover produtos
export function removeProduct(id) {
  const productRef = ref(db, 'products/' + id);
  remove(productRef).then(() => {
    console.log(`excluído o item ${id}`)
  }).catch((error) => { // não está funcionando o catch
    alert(`Não foi encontrado o item${id} para ser excluído.`);
    console.log(error);
  });
  // set(productsRef, null).then(() => {
  //   console.log(`excluído o item ${id}`)
  // });
}

//Para atualizar produtos
export function changeProductPrice(id, newPrice) {
  const productRef = ref(db, 'products/' + id);
  update(productRef, {price: newPrice}).then(() => {
    console.log(`o preço do produto de id: ${id}, foi alterado para ${newPrice}`)
  });
}

//Para ordenar produtos pelo nome (ainda não funciona)
export function ordainByName() {
  const eggsRef = ref(db, 'eggs');
  const orderlyName = query(eggsRef, orderByChild('name'));
  onChildAdded(orderlyName, (snapshot) => {
    console.log(snapshot.val())
  })
}