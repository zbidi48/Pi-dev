import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Prodducts:any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getproduct();
  }
  // tslint:disable-next-line:typedef
  getproduct(){
   this.api.getproductlist().subscribe((data: any) => {
     console.log(data);
      this.Prodducts = data;
    } , (err) => {alert(('eurreure')); });

  }

  sortBy(index:number){
    console.log(index)
    if(index == 1){
      console.log( this.Prodducts)
      this.Prodducts.sort((a:any,b:any)=>a.quantity - b.quantity )
    }
  }
  deleteprod(id)
  {

    if(confirm('vous ete sure d efface'+id+'!!'))
    {
      this.api.deleteprodbyid(id).subscribe(data=>{
         this.getproduct();})

    }
  }

}
