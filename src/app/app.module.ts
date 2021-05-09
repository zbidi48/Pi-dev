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
import { EditcategorieComponent } from './editcategorie/editcategorie.component';
import { ClientComponent } from './client/client.component';
import { AddclientComponent } from './addclient/addclient.component';
import { EditclientComponent } from './editclient/editclient.component';
import { CommandeComponent } from './commande/commande.component';
import { AddcommandeComponent } from './addcommande/addcommande.component';
import { EditcommandeComponent } from './editcommande/editcommande.component'

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
    EditcategorieComponent,
    ClientComponent,
    AddclientComponent,
    EditclientComponent,
    CommandeComponent,
    AddcommandeComponent,
    EditcommandeComponent,

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
