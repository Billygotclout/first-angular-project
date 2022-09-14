import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data-table',
  templateUrl: './get-data-table.component.html',
  styleUrls: ['./get-data-table.component.css'],
})
export class GetDataTableComponent implements OnInit {
  userList: any;
  constructor(private httpClient: HttpClient) {
    this.userList = [];
  }

 ngOnInit(): void {
   this.getUserList()
  }

  getUserList() {
 this.httpClient
      .get('http://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }
}
