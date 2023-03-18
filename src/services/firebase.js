// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import Admin SDK
import { getDatabase, ref, set } from "firebase/database";

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

export function addProduct(id, name, description, price, image) {

  let product = {
    id: id,
    name: name,
    description: description,
    price: price,
    image: image
  };

  //firebase: objeto global
  //database(): método para acesso ao DB criado
  //ref(): url em string para referencia do caminho do banco
  //set(): método que cria dados na url passada

  set(ref(db, "products/"), product);
}