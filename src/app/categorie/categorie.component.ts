import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categories: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getcateg();
  }

  // tslint:disable-next-line:typedef
  getcateg() {
    this.api.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data;
    }, (err) => {
      alert(('eurreure'));
    });

  }


  deletecat(id) {

    if (confirm('vous ete sure d efface' + id + '!!')) {
      this.api.deletecatbyid(id).subscribe(data => {
        this.getcateg();
      })

    }
  }
}
