
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, timeout} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class listService {



constructor(private http: HttpClient) { }

  getPosts() {
    const headers = this.getHeaders();
    const posts = this.http.get('https://jsonplaceholder.typicode.com/posts',{ headers }
    );
    return posts.pipe(timeout(30000), tap(_ => {}));
  }


  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }
}
