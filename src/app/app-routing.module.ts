import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'movie-details', loadChildren: () => import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule) },
  { path: 'browse-movie', loadChildren: () => import('./browse/browse.module').then(m => m.BrowseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
