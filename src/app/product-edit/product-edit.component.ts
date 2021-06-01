import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input()
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(),
    description: new FormControl()
  });
  constructor() {

  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required, Validators.minLength(6)]),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });
  }

  updateProduct() {
    const value = this.productForm.value;
  }
}
