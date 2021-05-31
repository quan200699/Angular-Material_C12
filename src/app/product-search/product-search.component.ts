import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  @Output()
  searchEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  search(value) {
    this.searchEvent.emit(value);
  }

}
