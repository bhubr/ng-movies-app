import { Injectable } from '@angular/core';
import { MOVIES } from 'src/app/mocks/movies';
import { Movie } from './interfaces/movie';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Array<Movie> = MOVIES;

  constructor() { }

  findAll() {
    return of(this.movies);
  }
}
