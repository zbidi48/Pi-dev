import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

import  { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';




@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  categories = [];
  addproductform = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new  FormControl('',Validators.required),
    weight: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    categuorie_id: new FormControl('',Validators.required)


  }

);
  wait = true;
  succesmesg = '';
  eurrormsg = '';


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getcategorie();

  }
  // tslint:disable-next-line:typedef
  addprod()
  {
    this.succesmesg = '';
    this.eurrormsg = '';
    this.api.addproduct(this.addproductform.value).subscribe((data: any)=>{if (data.success)
  {
    this.succesmesg = data.message;
  }else{
      this.eurrormsg = data.message;
  }
    }
    );


  }

  getcategorie()
  {
    this.api.getCategories().subscribe((categoriesList:any)=>{
      this.categories=categoriesList;
      this.wait=false;
    })
  }
  back()
  {
    window.history.back();

  }
}
