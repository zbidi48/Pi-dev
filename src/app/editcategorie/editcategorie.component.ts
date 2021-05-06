import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategorie',
  templateUrl: './editcategorie.component.html',
  styleUrls: ['./editcategorie.component.css']
})
export class EditcategorieComponent implements OnInit {
  categories=[];
  editcategorieform = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new  FormControl('',Validators.required),


    }

  );
  wait=true;

  constructor(private router:Router,private api: ApiService,private path:ActivatedRoute) { }

  ngOnInit(): void {
  }
  editcat()
  {
    const id=this.path.snapshot.params.id;

    this.api. updatecategorie(this.editcategorieform.value,id).subscribe((data: any)=>
      {this.router.navigate(['/categorie'])}
    );


  }
  getcatdata()
  {
    const id=this.path.snapshot.data.params.id;
    this.api.getcatbyid(id).subscribe((data:any)=>{
      this.editcategorieform.setValue({
        name:data.name,
       description:data.description
      })
      this.wait=false;
    });
  }
  back()
  {
    window.history.back();

  }
}
