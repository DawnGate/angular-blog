import { Route } from "@angular/router";
import { SimplePostComponent } from "./post/post.component";
import { SlugPostComponent } from "./slug-post/slug-post.component";

export const SIMPLE_ROUTES: Route[] = [
  { path: '', component: SimplePostComponent},
  { path: 'post/:slugId', component: SlugPostComponent}
]
