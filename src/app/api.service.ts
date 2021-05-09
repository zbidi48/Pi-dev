import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getproductlist(){
    return this.http.get<Array<any>>('http://127.0.0.1:8082/product/list')
  }

  getproductlistOrderByPrice(){
    return this.http.get<Array<any>>('http://127.0.0.1:8082/product/list')
  }
  getCategories(){
    return this.http.get<Array<any>>('http://127.0.0.1:8082/categorie/list')
  }
  getclients(){
    return this.http.get<Array<any>>('http://127.0.0.1:8082/client/list')
  }
  getcommande(){
    return this.http.get<Array<any>>('http://127.0.0.1:8082/commande/list')
  }
  getmethodepay(){
    return this.http.get<Array<any>>('http://127.0.0.1:8082/methodepay/list')
  }
  // tslint:disable-next-line:typedef
  addproduct(productData){
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/product/add', productData, httpoption);
  }
  addcategorie(catData){
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/categorie/add', catData, httpoption);
  }
  addbills(billsData){
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/categorie/add', billsData, httpoption);
  }
  addclient(clientData){
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/client/add', clientData, httpoption);
  }
  addcommande(cmdData){
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/commande/add', cmdData, httpoption);
  }
  getprodutbyid(id)
  {

    return this.http.get('http://127.0.0.1:8082/product/detailproduit/'+id);
  }
  getbillbyid(id) {

    return this.http.get('http://127.0.0.1:8082/bills/detailfacture/'+id)
  }
  getcatbyid(id) {

    return this.http.get('http://127.0.0.1:8082/categorie/detailcategorie/'+id)
  }
  getclientbyid(id) {

    return this.http.get('http://127.0.0.1:8082/client/detailclient/'+id)
  }
  getcommandebyid(id) {

    return this.http.get('http://127.0.0.1:8082/commande/detailcommande/'+id)
  }
  updatecategorie(categoriedata,id)
  {
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/categorie/update/'+id,categoriedata,httpoption);
  }
  updateprod(proddata,id)
  {
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/product/update/'+id,proddata,httpoption);
  }

  updatebills(billdata,id)
  {
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/bills/update/'+id,billdata,httpoption);
  }
  updateclient(clientdata,id)
  {
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/client/update/'+id,clientdata,httpoption);
  }
  updatecommande(cmddata,id)
  {
    const httpoption  = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8082/commande/update/'+id,cmddata,httpoption);
  }
  deleteprodbyid(id)
  {
    return this.http.get('http://127.0.0.1:8082/product/delete/'+id)
  }
  deletecategbyid(id)
  {
    return this.http.get('http://127.0.0.1:8082/categorie/delete/'+id)
  }
  deletecatbyid(id)
  {
    return this.http.get('http://127.0.0.1:8082/categorie/delete/'+id)
  }
  getbillslist()
  {
    return this.http.get<Array<any>>('http://127.0.0.1:8082/bills/list')
  }

  deletebillsbyid(id)
  {
    return this.http.get('http://127.0.0.1:8082/bills/delete/'+id)
  }
  deleteclientbyid(id)
  {
    return this.http.get('http://127.0.0.1:8082/client/delete/'+id)
  }
  deletecommandetbyid(id)
  {
    return this.http.get('http://127.0.0.1:8082/commande/delete/'+id)
  }

  filtragefactpartype(data)
  {
    return this.http.post('http://127.0.0.1:8082/bills/list/filter',data)
  }
  triefacture()
  {
    return this.http.get('http://127.0.0.1:8082/bills/list/trierfacture')
  }

  filterCommande(idTypePay,idProd){

    return this.http.get('http://127.0.0.1:8082/commande/list/filter/'+idTypePay+'/'+idProd)
  }


}
