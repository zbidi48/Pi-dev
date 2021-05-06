import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  categories = [];
  editproductform = new FormGroup({
      name: new FormControl('',Validators.required),
      price: new  FormControl('',Validators.required),
     weight : new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      categuorie_id: new FormControl('',Validators.required)


    }

  );
  wait = true;
  succesmesg = '';
  eurrormsg = '';


  constructor(private router:Router,private api: ApiService,private path:ActivatedRoute) { }

  ngOnInit(): void {
    this.getcategorie();

  }
  getproductdata()
  {
    console.log("test",this.path.snapshot.params.id);
    const id=this.path.snapshot.data.params.id;

    this.api.getprodutbyid(id).subscribe((data:any)=>{
      this.editproductform.setValue({
        name:data.name,
        price:data.price,
        weight:data.weight,
        quantity:data.quality,
        date:data.date,
      categuorie_id:data.categuorie_id
      })
      this.wait=false;
    });
  }

  editprod()
  {
    const id=this.path.snapshot.data.params.id;
    this.succesmesg = '';
    this.eurrormsg = '';
    this.api.updateprod(this.editproductform.value,id).subscribe((data: any)=>
      {this.router.navigate(['/products'])}
    );


  }

  getcategorie()
  {
    this.api.getCategories().subscribe((categoriesList:any)=>{
      this.categories=categoriesList;
      this.getproductdata();
    })



  }
  back()
  {
    window.history.back();

  }

}
