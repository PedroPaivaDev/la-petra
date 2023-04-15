// const baseURLJsonServer = 'https://my-json-server.typicode.com/PedroPaivaDev/la-petra';

const baseURLFirebase = 'https://db-la-petra-default-rtdb.firebaseio.com';

export function PRODUCTS_GET(category,type) {
    return {
        url: `${baseURLFirebase}/${category}/${type}.json`
    }
}

export function SLIDER_GET() {
    return {
        url: `${baseURLFirebase}/slider.json`
    }
}