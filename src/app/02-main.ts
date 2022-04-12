import { ProductMemoryServices } from "./services/product-memory.service";



const productMemoryService = new ProductMemoryServices();

productMemoryService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bal bla',
  categoryId: 12,
  images: []
});

const products = productMemoryService.getAll();
const productId = products[0].id;
productMemoryService.update(productId, {
  title: 'cambiar nombre'
});

const rta = productMemoryService.findOne(productId);
console.log(rta);
