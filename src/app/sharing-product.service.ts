import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from './product-model';


@Injectable({
  providedIn: 'root'
})
export class SharingProductService {

  private content = new BehaviorSubject<ProductModel>(null);

  public share = this.content.asObservable();

  constructor() { }

  /*
  * IF ANY DATA CHANGES UPDATE TO THE COMPONENTS WHOEVER IS SUBSCRIBING TO IT
  */

  update(product:ProductModel){
    this.content.next(product);
  }
}
