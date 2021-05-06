import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editbills',
  templateUrl: './editbills.component.html',
  styleUrls: ['./editbills.component.css']
})
export class EditbillsComponent implements OnInit {
  clients=[];
  editbillsform = new FormGroup({
    type: new FormControl('',Validators.required),
    amount: new FormControl ('',Validators.required),
    //client_id: new FormControl('', Validators.required)


  });
  wait=true;
  constructor(private router:Router,private api: ApiService,private path:ActivatedRoute) { }

  ngOnInit(): void {

  this.getbillsdata();

  }
  getbillsdata()
  {
    const id=this.path.snapshot.params.id;
    this.api.getbillbyid(id).subscribe((data:any)=>{
      console.log(data)
      this.editbillsform.setValue({
       amount:data.amount,
        type:data.type,
        //client_id:data.client_id
      })
      this.wait=false;
    });
  }

  editbills()
  {
    const id=this.path.snapshot.params.id;

    this.api.updatebills(this.editbillsform.value,id).subscribe((data: any)=>
      {this.router.navigate(['/bills'])}
    );


  }


  back()
  {
    window.history.back();

  }




}
