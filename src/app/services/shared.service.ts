import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selecteMovie: {};
  private allMovie: any;

  constructor() { }

  setSeletedMovie(selectedMovied) {
    this.selecteMovie = selectedMovied
  }

  getSeletedMovie() {
    return this.selecteMovie
  }

  setAllMovies(allMovie) {
    this.allMovie = allMovie;
  }

  getAllMovies() {
    return this.allMovie;
  }

}
