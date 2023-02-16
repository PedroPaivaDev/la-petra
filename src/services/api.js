const baseURL = 'https://my-json-server.typicode.com/PedroPaivaDev/la-petra'
    
export default async function getProducts() {
const response = await fetch(`${baseURL}/products`);
return await response.json();
}
