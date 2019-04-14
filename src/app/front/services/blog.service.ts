import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }

  getPosts() : any{
    return this.http.get("http://localhost:4200/assets/jsons/posts.json");
  }
}
