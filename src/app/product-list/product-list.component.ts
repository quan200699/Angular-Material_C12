import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct: Product[] = [];
  statusForEditForm: boolean = false;
  productEdit: Product = {};
  index = -1;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProduct();
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

  getAllProduct(){
   this.listProduct = this.productService.getAll();
  }

  showEditForm(i: number) {
    if(this.index == i){
      this.statusForEditForm = !this.statusForEditForm;
    }
    this.productEdit = this.listProduct[i];
    this.index = i;
  }
}
