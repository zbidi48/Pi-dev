import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {
  categories=[];
  addcategorieform = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new  FormControl('',Validators.required),


    }

  );
  wait=true;

  constructor(private  api: ApiService) { }

  ngOnInit(): void {

  }
  addcategorie()
  {

    this.api.addcategorie(this.addcategorieform.value).subscribe((data: any)=>{

      }
    );


  }

  getcategorie()
  {
    this.api.getCategories().subscribe((data:any)=>{
      this.categories=data;
      this.wait=false;
    })
  }
  back()
  {
    window.history.back();

  }
}
