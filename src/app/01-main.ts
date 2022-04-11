// Para trabajar con asincronismo primero instalaremos
// AXIOS para hacer request y conectarnos a servicios web,
// por medio del protocolo HTTP
import axios from 'axios';
import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () => {
  // Estamos tipando hacia afuera
  async function getProducts() {
    // pero internamente no lo tenemos tipado, para hacerlo
    // colocamos después del axios.get "Promise<Product[]>",
    // con eso logramos el tipado interno, al hacerlo de
    // esta manera podemos prescindir del tipado externo
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    // const data = rta.data as Product[];
    // code
    // Hay algunas librerías no soportan el tipado interno, para
    // solucionarlo hacemos lo siguiente
    return data;
  }
  const products = await getProducts();
  console.log(products.map( item => `${item.id} --- ${item.title}`));
})();
