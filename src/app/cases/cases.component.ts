import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cases } from '../object-models/Cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'status'];
  data: Cases[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCases()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data, 'Cases');
        this.isLoadingResults = false;
      }, err => {
        console.log(err, 'Cases error');
        this.isLoadingResults = false;
      });
  }
}
