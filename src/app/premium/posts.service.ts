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
    const fileName = pageIndex ? "-additionals" : "";
    return this.http.get<IFullPost[]>("/assets/premium-posts" + fileName + ".json")
  }

}
