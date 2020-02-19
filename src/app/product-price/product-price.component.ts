import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

 @Input() product:ProductModel;
  constructor() { }

  ngOnInit() {
  }

}
