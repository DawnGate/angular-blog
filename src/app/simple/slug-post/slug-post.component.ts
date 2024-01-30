import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostShort, SimplePostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { SIMPLE_ORIGIN } from '../../constants';

@Component({
  selector: 'app-slug-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './slug-post.component.html',
  styleUrl: './slug-post.component.scss'
})
export class SlugPostComponent implements OnInit {

  origin = SIMPLE_ORIGIN;

  post: null | undefined | PostShort = null;

  constructor(
    private postService: SimplePostsService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const slugId = routeParams.get("slugId");

    this.postService.getShortPosts().subscribe(res => {
        if(res && res.length){
          const foundPost = res.find(item => item.slug === slugId)
          this.post = foundPost
        }
    })
  }
}
