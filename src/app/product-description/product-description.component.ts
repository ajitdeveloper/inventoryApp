import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-model';
import { SharingProductService } from '../sharing-product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private route:ActivatedRoute,private sharedProduct:SharingProductService) { }

   currentProduct:ProductModel;
  ngOnInit() {
    let product = parseInt(this.route.snapshot.paramMap.get('productSku'));
    this.sharedProduct.share.subscribe(product=>{
      this.currentProduct = product;
    })
    console.log(this.currentProduct);  }


}
