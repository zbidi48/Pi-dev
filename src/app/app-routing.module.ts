import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import { HttpClientModule} from '@angular/common/http';
import {AddproductComponent} from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { BillsComponent } from './bills/bills.component';
import { AddbillsComponent } from './addbills/addbills.component';
import { EditbillsComponent } from './editbills/editbills.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { EditcategorieComponent } from './editcategorie/editcategorie.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'add', component: AddproductComponent},
  {path:'edit/:id', component: EditproductComponent},
  {path: 'bills' , component: BillsComponent},
  {path: 'addbills',component: AddbillsComponent },
  {path:'editbills/:id', component: EditbillsComponent },
  {path:'categorie', component: CategorieComponent},
  {path:'addcategorie' ,component: AddcategorieComponent},
  {path:'editcategorie/:id' ,component:EditcategorieComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
