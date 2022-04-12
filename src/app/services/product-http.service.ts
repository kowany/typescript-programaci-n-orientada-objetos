// https://api.escuelajs.co/docs/#/

import axios from "axios";

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService {

  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>('');
    return data;
  }
  async update(id: Product['id'], change: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, change);
    return data;
  }
  async create(dto: CreateProductDto){
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }
  async findOne(id: number) {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }

}