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

  filtragefactpartype(data)
  {
    return this.http.post('http://127.0.0.1:8082/bills/list/filter',data)
  }
  triefacture()
  {
    return this.http.get('http://127.0.0.1:8082/bills/list/trierfacture')
  }


}
