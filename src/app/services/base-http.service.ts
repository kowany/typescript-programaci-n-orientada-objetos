import axios from 'axios';
import { Category } from "../models/category.model";
import { Product } from '../models/product.model';

export class BaseService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(
    private url: string
  ) {}
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseService<string>();
// service.getAll();

// const service1 = new BaseService<Category>();
// service1.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseService<Product>(url1);

  const rta = await productService.getAll();
  console.log('Products', rta.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log('Categories', rta1.length);
})();

