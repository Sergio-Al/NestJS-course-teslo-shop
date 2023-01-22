import { initialData } from './data/data';
import { Injectable } from '@nestjs/common';
import { ProductsService } from './../products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}
  async runSeed() {
    await this.insertNewProducts();

    return 'SEED Executed!!!';
  }

  private async insertNewProducts() {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    // products.forEach((product) => {
    //   insertPromises.push(this.productsService.create(product));
    // });

    await Promise.all(insertPromises);

    return true;
  }
}
