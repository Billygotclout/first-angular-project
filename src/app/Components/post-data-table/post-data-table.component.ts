import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data-table',
  templateUrl: './post-data-table.component.html',
  styleUrls: ['./post-data-table.component.css'],
})
export class PostDataTableComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
  createData(post: { title: string; body: string }) {
   
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts', post).subscribe((res)=>{
      console.log(res)
    })
  }
}
// https://jsonplaceholder.typicode.com/posts