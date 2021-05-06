import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EditproductComponent } from './editproduct/editproduct.component';
import { BillsComponent } from './bills/bills.component';
import { AddbillsComponent } from './addbills/addbills.component';
import { EditbillsComponent } from './editbills/editbills.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { EditcategorieComponent } from './editcategorie/editcategorie.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductComponent,
    EditproductComponent,
    BillsComponent,
    AddbillsComponent,
    EditbillsComponent,
    CategorieComponent,
    AddcategorieComponent,
    EditcategorieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
