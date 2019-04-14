import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(
    private blogService : BlogService,
    private route : ActivatedRoute
  ) { }

  public onePost : any;
  public _onePost : Observable<Post>

  ngOnInit() {

    this._onePost = this.blogService.getPosts().pipe(
      tap(data=>{
        let postId = this.route.params['_value']['id'];
        this.onePost = (data as any).filter(x=>x.id==postId)[0]
      })
    )
  }

}
