import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct: Product[] = [{
    name: 'IPhone 12',
    price: 3200000
  }, {
    name: 'IPhone 11',
    price: 1500000
  }, {
    name: 'IPhone X',
    price: 1000000
  }, {
    name: 'SamSung S10',
    price: 1000000
  }];

  constructor() {
  }

  getAll() {
    return this.listProduct;
  }

  createNewProduct(product: Product){
    this.listProduct.push(product);
  }

}
