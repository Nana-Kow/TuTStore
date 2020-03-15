import { listService } from './list.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  [x: string]: any;

  posts: any = [];
  hasLoaded = false;

  constructor(private http: HttpService,
              private listService: listService) { }

  ngOnInit() {
    // this._http.myMethod();
    this.loadPosts();
  }

  loadPosts() {
    this.listService.getPosts().subscribe(response => {
      this.posts = response;
      this.hasLoaded = true;
      console.log(this.posts);
    });
  }

}
