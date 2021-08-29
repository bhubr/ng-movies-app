import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MOVIES } from 'src/app/mocks/movies';

@Component({
  selector: '[app-movie-list]',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Array<Movie> = MOVIES;

  constructor() { }

  ngOnInit(): void {
  }

}
