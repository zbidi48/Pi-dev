import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  clients=[];
  addclientform = new FormGroup({
    lastname: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    garder: new FormControl('',Validators.required),
    psw: new FormControl('',Validators.required)

  });
  wait = true;
  succesmesg = '';
  eurrormsg = '';


  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  addclients()
  {
    this.succesmesg = '';
    this.eurrormsg = '';
    this.api.addclient(this.addclientform.value).subscribe((data: any)=>{
      this.succesmesg = data.message;
      }
    );


  }
  back()
  {
    window.history.back();

  }

}
