import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "http://localhost:54868/api/Courseposts";

  constructor(private http: HttpClient) { }
  getposts(): Observable<any> {
    debugger;
    return this.http.get(this.url);
  }
}
