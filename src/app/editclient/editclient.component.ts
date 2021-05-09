import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  clients=[];
  editclientform = new FormGroup({
    lastname: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    garder: new FormControl('',Validators.required),
    psw: new FormControl('',Validators.required)

  });
  wait=true;
  succesmesg = '';
  eurrormsg = '';


  constructor(private router:Router,private api: ApiService,private path:ActivatedRoute) { }

  ngOnInit(): void {
  }
  getclientdata()
  {
    console.log("test",this.path.snapshot.params.id);
    const id=this.path.snapshot.params.id;

    this.api.getclientbyid(id).subscribe((data:any)=>{
      this.editclientform.setValue({
        lastname:data.lastname,
        firstname:data.firstname,
        garder:data.garder,
        psw:data.psw,

      })
      this.wait=false;
    });
  }
  editclients()
  {
    const id=this.path.snapshot.params.id;
    this.succesmesg = '';
    this.eurrormsg = '';
    this.api.updateclient(this.editclientform.value,id).subscribe((data: any)=>
      {this.router.navigate(['/client'])}
    );


  }
  back()
  {
    window.history.back();

  }

}
