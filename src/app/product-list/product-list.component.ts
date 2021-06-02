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
  page = 0;
  size = 10;
  message = "";
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProduct(this.page, this.size);
  }

  search(value: string) {
    if(value == ""){
      this.getAllProduct(this.page, this.size);
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

  getAllProduct(page, size){
    this.productService.getAll(page, size).subscribe(products=>{
      this.listProduct = products;
    }, error => {
      this.message = error.error;
    });
  }

  showEditForm(i: number) {
    if(this.index == i){
      this.statusForEditForm = !this.statusForEditForm;
    }
    this.productEdit = this.listProduct[i];
    this.index = i;
  }

  next() {
    this.page++;
    this.getAllProduct(this.page, this.size);
  }

  previous() {
    this.page--;
    this.getAllProduct(this.page, this.size);
  }
}
