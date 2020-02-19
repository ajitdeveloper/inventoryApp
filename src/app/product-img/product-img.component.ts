import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent implements OnInit {

 @Input() product:ProductModel;
  constructor() { }

  ngOnInit() {
  }

}
