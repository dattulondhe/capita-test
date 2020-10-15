import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';

import { DataServiceService } from './../services/data-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieData = [];
  constructor(private dataService: DataServiceService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.dataService.getMoviesList().subscribe((moviesResponse) => {
      this.movieData = moviesResponse.movies;
      this.sharedService.setAllMovies(this.movieData);
    })
  }

  gotoDetails(selectedMovie) {
    this.sharedService.setSeletedMovie(selectedMovie)
    this.router.navigate(['movie-details']);
  }




}
