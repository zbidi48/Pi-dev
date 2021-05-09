import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
clients=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getclient();

  }
  getclient(){
    this.api.getclients().subscribe((data: any) => {
      console.log(data);
      this.clients = data;
    } , (err) => {alert(('eurreure')); });

  }
  deleteclient(id)
  {

    if(confirm('vous ete sure d efface'+id+'!!'))
    {
      this.api.deleteclientbyid(id).subscribe(data=>{
        this.getclient();})

    }
  }
}
