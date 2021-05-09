import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcommande',
  templateUrl: './addcommande.component.html',
  styleUrls: ['./addcommande.component.css']
})
export class AddcommandeComponent implements OnInit {
  clients=[];
  produits=[];
  payment=[];
  addcommandeform=new FormGroup({
    datecomande: new FormControl('',Validators.required),
    paymenttype: new FormControl('',Validators.required),
    idclient: new FormControl('',Validators.required),
    idproduit : new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    idpayementtype: new FormControl('',Validators.required),
    typedepay: new FormControl('',Validators.required),



  });

  wait = true;
  succesmesg = '';
  eurrormsg = '';


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getclient();
    this.getmethodpay();
    this.getprod();
  }
  addcmd()
  {
    this.succesmesg = '';
    this.eurrormsg = '';
    this.api.addcommande(this.addcommandeform.value).subscribe((data: any)=>{if (data.success)
      {
        this.succesmesg = data.message;
      }else{
        this.eurrormsg = data.message;
      }
      }
    );


  }
  getclient()
  {
    this.api.getclients().subscribe((data:any)=>{
      this.clients=data;
      this.wait=false;
    })
  }
getprod()
{
  this.api.getproductlist().subscribe((data:any)=>{
    this.produits=data;
    this.wait=false;
  })
}
  getmethodpay()
  {
    this.api.getmethodepay().subscribe((data:any)=>{
      this.payment=data;
      this.wait=false;
    })
  }
  back()
  {
    window.history.back();

  }
}
