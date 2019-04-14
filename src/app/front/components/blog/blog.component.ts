import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  public dugmeTekst = "View More";
  public posts : Post[];
  public columns = [
    {
      title:"#"
    },
    {
      title:"Title"
    },
    {
      title:"Short Text"
    },
    {
      title:"Full Text"
    },
    {
      title:"Author"
    },
    {
      title:"Image"
    },
    {
      title:"Edit"
    }
  ]

  constructor(
    private blogService : BlogService,
    private router : Router 
  ) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe((data : Post[])=>{
      this.posts = data;

      // this.posts[0].author = "Pera"
    })
  }

  navigateToPost(id){
    this.router.navigateByUrl("/front/single-post/"+id)
  }

}
