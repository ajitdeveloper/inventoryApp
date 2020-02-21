import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { SharingProductService } from '../sharing-product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
products:ProductModel[];

constructor(private sharingProduct:SharingProductService){
  this.products = [
    new ProductModel('NICEHAT',
  'A Nice Black Hat',
  '/assets/images/products/black-hat.jpg',
  ['Men','Accessories','Hats'],
  29.99), 
  new ProductModel('NEATOJACKET',
   'Blue Jacket',
   '/assets/images/products/blue-jacket.jpg',
   ['Women', 'Apparel', 'Jackets & Vests'],
   238.99),
   new ProductModel('MYSHOES',
   'Black Running Shoes',
   '/assets/images/products/black-shoes.jpg',
   ['Men', 'Shoes', 'Running Shoes'],
   109.99)
];
}

productWasSelected(product:ProductModel){
//  console.log(product);
this.sharingProduct.update(product);
}


  ngOnInit() {
  }

}
