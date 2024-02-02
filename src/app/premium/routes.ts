import { Route } from "@angular/router";
import { HomePremiumComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";

export const ROUTES: Route[] = [
  { path: '', component: HomePremiumComponent},
  { path: 'post/:slugId', component: PostComponent}
]
