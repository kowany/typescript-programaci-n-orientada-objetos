import { validate } from 'class-validator';

import { ProductHttpService } from "./product-http2.service";

import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url)  ;

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    // lógica
    // validate(dto);
    // this.http.otroRequest();
    return this.http.update(id, dto);
  }
}
