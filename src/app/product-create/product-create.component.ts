import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  @Output()
  productSubmit = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  createProduct(productForm: NgForm) {
    const value = productForm.value;
    this.productSubmit.emit(value);
  }
}
