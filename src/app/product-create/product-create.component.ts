import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';
import {NgForm} from '@angular/forms';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  createProduct(productForm: NgForm) {
    const value = productForm.value;
    this.productService.createNewProduct(value);
  }
}
