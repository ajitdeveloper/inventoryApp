import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /*
  * To get the value from
  * App component.ts [Parent Component]
  */
  @Input() productList:ProductModel[];

  /*
  * To pass the value from
  * this component[child] to app component[parent]
  * onProductSelected - outputs the current
  * Product whenever a new Product is selected
  */

 @Output() onProductSelect:EventEmitter<ProductModel>;

  constructor() { 
    
  }
  ngOnInit() {
    
  }

}
