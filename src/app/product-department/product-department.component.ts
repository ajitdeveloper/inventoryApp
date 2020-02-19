import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product:ProductModel;
  constructor() { }

  ngOnInit() {
    console.log(this.product.department);
  }

}
