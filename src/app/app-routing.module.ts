import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [{
  path:"dashboard",
  component: DashboardComponent
},
{
  path:"dashboard/:product",
  component:ProductDescriptionComponent  
},
{
  path:"admin",
  component:AdminComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
