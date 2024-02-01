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

  tempPosts: IFullPost[] = []

  constructor(private postService: PostsService){
  }

  ngOnInit(){
    this.postService.getHighlightPosts().subscribe(res => {
      if(res){
        this.highlightPosts = [res[0], res[0], res[0], res[0], res[0]]
      }
    })

    this.postService.getPosts(0).subscribe(res => {
      if(res){
        this.allPosts = res.posts
      }
    })

    this.postService.getPosts(1).subscribe(res => {
      if(res){
        this.tempPosts = res.posts
      }
    })
  }

  handleLoadMore = () => {
    this.canLoadMore = false
    this.allPosts = [...this.allPosts, ...this.tempPosts]
  }

}
