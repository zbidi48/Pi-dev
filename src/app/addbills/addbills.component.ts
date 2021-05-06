import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbills',
  templateUrl: './addbills.component.html',
  styleUrls: ['./addbills.component.css']
})
export class AddbillsComponent implements OnInit {
  clients=[];
  addbillsform = new FormGroup({
      type: new FormControl('',Validators.required),
    amount: new FormControl ('',Validators.required),
    client_id: new FormControl('', Validators.required)


    }

  );
  wait=true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getclient();
    this.addbills();

  }
  addbills() {

    this.api.addbills(this.addbillsform.value).subscribe((data: any) => {
      }
    );
  }

    getclient()
    {
      this.api.getclients().subscribe((clientsList:any)=>{
        this.clients=clientsList;
        this.wait=false;
      })
    }


  back()
  {
    window.history.back();

  }


}
