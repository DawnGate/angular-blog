import { Component, OnInit } from '@angular/core';
import { IShortPost, PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premium-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePremiumComponent implements OnInit {

  highlightPosts: IShortPost[] = []

  constructor(private postService: PostsService){
  }

  ngOnInit(){
    this.postService.getHighlightPosts().subscribe(res => {
      if(res){
        this.highlightPosts = [res[0], res[0], res[0], res[0], res[0]]
      }
    })
  }

}
