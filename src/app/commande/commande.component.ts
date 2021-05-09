import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes = [];
  payments = [];
  clients = [];


  filterForm = new FormGroup({
    idPay: new FormControl(''),
    idProd: new FormControl(''),

  });


  constructor(private  api: ApiService) {
  }

  ngOnInit(): void {
    this.getcmd();
    this.getclient();
    this.getmethodpay();
  }

  search(){
    this.api.filterCommande(this.filterForm.value.idPay,this.filterForm.value.idProd).subscribe((data:any)=>this.commandes = data)
  }

  getcmd() {
    this.api.getcommande().subscribe((data: any) => {
      console.log(data);
      this.commandes = data;
    }, (err) => {
      alert(('eurreure'));
    });

  }

  deletecmd(id) {

    if (confirm('vous ete sure d efface' + id + '!!')) {
      this.api.deletecommandetbyid(id).subscribe(data => {
        this.getcmd();
      })

    }

  }
  getclient()
  {
    this.api.getclients().subscribe((data:any)=>{
      this.clients=data;
    })
  }

  getmethodpay()
  {
    this.api.getmethodepay().subscribe((data:any)=>{
      this.payments=data;
    })
  }


}
