import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct: Product[] = [{
    name: 'IPhone 12',
    price: 3200000
  },{
    name: 'IPhone 11',
    price: 1500000
  },{
    name: 'IPhone X',
    price: 1000000
  },{
    name: 'SamSung S10',
    price: 1000000
  },];
  status: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

  search(value: string) {
    if(value == ""){
      this.getAllProduct();
    }else {
      let products = [];
      for (let i = 0;i<this.listProduct.length;i++){
        if(this.listProduct[i].name.includes(value)){
          products.push(this.listProduct[i]);
        }
      }
      this.listProduct = products;
    }
  }

  changeStatus() {
    this.status = !this.status;
  }

  addProductToList(product: Product) {
    this.listProduct.push(product)
  }

  getAllProduct(){
   this.listProduct = [{
      name: 'IPhone 12',
      price: 3200000
    },{
      name: 'IPhone 11',
      price: 1500000
    },{
      name: 'IPhone X',
      price: 1000000
    },{
      name: 'SamSung S10',
      price: 1000000
    }];
  }

}
