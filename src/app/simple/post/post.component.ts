import { Component, OnInit } from '@angular/core';
import { PostShort, SimplePostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { SIMPLE_ORIGIN } from '../../constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simple-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class SimplePostComponent implements OnInit {

  latestPost: PostShort | null = null;
  otherPosts: PostShort[] = [];

  origin = SIMPLE_ORIGIN;

  constructor(private postService: SimplePostsService) {}

  ngOnInit(): void {
    this.postService.getShortPosts().subscribe((res) => {
      this.latestPost = res[0]
      this.otherPosts = res.slice(1)
    })
  }

}
