import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() product:ProductModel; 

  ngOnInit() {
  }

}
