import { Component } from '@angular/core';
import {Product} from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listProduct: Product[] = [{
    name: 'IPhone 12',
    price: 3200000
  },{
    name: 'IPhone 11',
    price: 1500000
  },{
    name: 'IPhone X',
    price: 1000000
  },];
  title = 'demo-angular-create-component';
}
