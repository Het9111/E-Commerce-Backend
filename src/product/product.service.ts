import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDetail } from './type/product.type';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async getAllProducts() {
    const products = await this.productRepo.find();

    return {
      length: products.length,
      status: 'success',
      products,
    };
  }

  async getProduct(id: number) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      return {
        status: 'fail',
        message: 'No product found',
      };
    }
    return {
      status: 'success',
      product,
    };
  }

  async deleteProduct(id: number) {
    let product = await this.productRepo.findOneBy({ id });

    if (!product) {
      return {
        status: 'fail',
        message: 'No Product found',
      };
    }

    let data = await this.productRepo.delete(id);
    return {
      status: 'success',
      data,
    };
  }

  async addProduct(product: ProductDetail) {
    let newProduct = this.productRepo.create(product);
    newProduct = await this.productRepo.save(newProduct);
    return {
      status: 'success',
      newProduct,
    };
  }
}
