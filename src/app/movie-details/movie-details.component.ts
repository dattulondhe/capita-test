import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any = {};
  allMovies: any = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getSelectedMovie();
    this.allMovies = this.sharedService.getAllMovies().sort(() => Math.random() - 0.5).slice(0, 6);
  }

  getSelectedMovie() {
    this.movieDetails = this.sharedService.getSeletedMovie();
  }

  gotoDetails(selectedMovie) {
    this.sharedService.setSeletedMovie(selectedMovie);
    this.getSelectedMovie();
  }


}
