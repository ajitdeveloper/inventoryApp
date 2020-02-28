import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { PersonTableComponent } from './person-table/person-table.component';
import { NewuserComponent } from './newuser/newuser.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductImgComponent,
    ProductDepartmentComponent,
    ProductPriceComponent,
    ProductDescriptionComponent,
    DashboardComponent,
    AdminComponent,
    UsersComponent,
    PersonTableComponent,
    NewuserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
