import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ProductModel } from '../product-model';
import { Router } from '@angular/router';
import { SharingProductService } from '../sharing-product.service';


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

  private currentProduct:ProductModel;

  constructor(private router : Router, private sharingProduct:SharingProductService) { 
    // The initialization of the emitter is done in contructor
    this.onProductSelect = new EventEmitter();
  }
  ngOnInit() {
  
    
  }

  onclicked(product:ProductModel){
    this.currentProduct = product;
    this.onProductSelect.emit(product);
    this.router.navigate(['/dashboard', product.sku]);
  }

  isSelected(product:ProductModel):boolean{
    if(!product|| !this.currentProduct){
      return false;
    }
    product.sku == this.currentProduct.sku;
  }

}
