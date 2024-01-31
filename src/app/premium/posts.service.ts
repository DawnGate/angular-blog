import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IShortPost {
  title: string,
  slug: string,
  authors: {
    name: string,
    avatar: string
  }[],
  date: string,
  ogImage: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts = () => {
    return this.http.get("https://vercel.com/api/blog/posts?skip=20&limit=10&fields.recommended=false&order=-fields.date")
  }

  getHighlightPosts = () => {
    return this.http.get<IShortPost[]>("/assets/premium-highlight.json")
  }
}
