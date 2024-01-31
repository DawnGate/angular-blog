import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PostShort {
  author: {
    name: string,
    picture: string
  },
  coverImage: string,
  date: string,
  slug: string,
  title: string,
  content: string,
  excerpt: string
}

@Injectable({
  providedIn: 'root'
})

export class SimplePostsService {


  constructor(private http: HttpClient) {}

  getShortPosts = () => {
    return this.http.get<PostShort[]>('/assets/simple-posts.json')
  }

}
