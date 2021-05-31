import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  listProduct: Product[] = [];
  status: boolean = false;
  displayedColumns: string[] = ['name', 'price', 'address'];
  constructor() {
  }

  ngOnInit() {
  }

  search(value: string) {
    let products = [];
    for (let i = 0;i<this.listProduct.length;i++){
      if(this.listProduct[i].name.includes(value)){
        products.push(this.listProduct[i]);
      }
    }
    this.listProduct = products;
  }

  changeStatus() {
    this.status = !this.status;
  }
}
