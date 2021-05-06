import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills: any = [];
  clients: any = [];
  searchForm = new FormGroup({
    idClient : new FormControl('-1'),
    typeFacture : new FormControl(''),

  })

  constructor(private api: ApiService) {
  }

  search(){
    const data = this.searchForm.value;
    //console.log(id)
    if (data.idClient != '-1'){
      this.api.filtragefactpartype(data).subscribe((responseFromServer:any)=>{
        console.log(responseFromServer);
        this.bills = responseFromServer
      })
    }else{
      this.getbills();
    }

  }

  ngOnInit(): void {
    this.getbills();
    this.getClients();
  }

  getClients(){
    this.api.getclients().subscribe((data)=>this.clients=data);
  }


  // tslint:disable-next-line:typedef
  getbills() {
    this.api.getbillslist().subscribe((data: any) => {
      console.log(data)

      this.bills = data;
    }, (err) => {
      alert(('eurreure'));
    });

  }


  deletebills(id) {

    if (confirm('vous ete sure d efface' + id + '!!')) {
      this.api.deletebillsbyid(id).subscribe(data => {
        this.getbills();
      })

    }


  }
  recherchefacturepartype(id)
  {
    this.api.filtragefactpartype(id).subscribe(data =>{
      this.getbills();
    })
  }
}
