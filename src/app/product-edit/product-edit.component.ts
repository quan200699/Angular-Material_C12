import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(),
    description: new FormControl()
  });
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id)
    })
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required, Validators.minLength(6)]),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });
  }

  updateProduct() {
    if(this.productForm.valid){
      const value = this.productForm.value;
      console.log(value)
    }
  }

  get name() {
    return this.productForm.get('name');
  }
}
