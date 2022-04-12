import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from "../models/category.model";
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(
    protected url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, change);
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
  productService.update<Product['id'], UpdateProductDto>(9, {
    title: 'asa',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseService<Category>(url2);

  const rta1 = await categoryService.getAll();
  console.log('Categories', rta1.length);
  // productService.update<Category['id'], UpdateCategoryDto>(9, {
  //   title: 'asa',
  // });
})();

