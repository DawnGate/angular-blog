import { Component, OnInit } from '@angular/core';
import { IFullPost, PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from '../authors/authors.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-premium-home',
  standalone: true,
  imports: [CommonModule, RouterLink , AuthorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePremiumComponent implements OnInit {

  canLoadMore = true

  highlightPosts: IFullPost[] = []

  allPosts: IFullPost[] = []

  constructor(private postService: PostsService){
  }

  ngOnInit(){

    this.postService.getPosts(0).subscribe(res => {
      if(res){
        this.allPosts = res
        this.highlightPosts = res.slice(0, 5)
      }
    })

      }

  handleLoadMore = () => {
    this.canLoadMore = false
    this.postService.getPosts(1).subscribe(res => {
      if(res){
        this.allPosts = [...this.allPosts, ...res]
      }
    })

  }

}
