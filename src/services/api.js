const baseURL = 'https://my-json-server.typicode.com/PedroPaivaDev/la-petra';

export function PRODUCTS_GET() {
    return {
        url: `${baseURL}/products`
    }
}

export function SLIDER_GET() {
    return {
        url: `${baseURL}/slider`
    }
}