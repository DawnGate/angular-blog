import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IFullPost {
  authors: {real: string, vercel: string }[],
  category?: {name: string, slug: string},
  ogImage: {
    source: string,
  },
  id: string,
  title: string,
  date: string,
  content?: any
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts = (pageIndex: number) => {
    const pageSize = pageIndex*10;
    return this.http.get<{posts: IFullPost[]}>(`https://vercel.com/api/blog/posts?skip=${pageSize}&limit=10&fields.recommended=false&order=-fields.date`)
  }

  getHighlightPosts = () => {
    return this.http.get<IFullPost[]>("/assets/premium-highlight.json")
  }
}
