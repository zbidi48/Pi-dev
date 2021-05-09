import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.css']
})
export class EditcommandeComponent implements OnInit {
  clients=[];
  produits=[];
  payment=[];
  editcommandeform=new FormGroup({
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



  constructor(private router:Router,private api: ApiService,private path:ActivatedRoute) { }

  ngOnInit(): void {
    this.getclient();
    this.getmethodpay();
    this.getprod();
  }
  editcmd()
  {
    const id=this.path.snapshot.params.id;

    this.api.updatecommande(this.editcommandeform.value,id).subscribe((data: any)=>
      {this.router.navigate(['/commande'])}
    );


  }
  getcmddata()
  {
    const id=this.path.snapshot.data.params.id;
    this.api.getcommandebyid(id).subscribe((data:any)=>{
      this.editcommandeform.setValue({
        datecomande:data.datecomande,
        paymenttype:data.paymenttype,
        idclient:data.idclient,
        idproduit:data.idproduit,
        quantity:data.quatity,
        idpayementtype:data.idpayementtype,
        typedepay:data.typedepay

      })
      this.wait=false;
    });

  }
  back()
  {
    window.history.back();

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


}
