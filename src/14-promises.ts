// Para trabajar con asincronismo primero instalaremos
// AXIOS para hacer request y conectarnos a servicios web,
// por medio del protocolo HTTP
import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>( (resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  console.log('---'.repeat(10));
  const productsV2 = await getProductsAsync();
  console.log(productsV2);
})();
