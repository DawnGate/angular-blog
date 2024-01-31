import { Route } from "@angular/router";
import { HomePremiumComponent } from "./home/home.component";
// import { SlugPostComponent } from "./slug-post/slug-post.component";

export const SIMPLE_ROUTES: Route[] = [
  { path: '', component: HomePremiumComponent},
  // { path: 'post/:slugId', component: SlugPostComponent}
]
