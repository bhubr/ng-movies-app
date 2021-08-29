import { Injectable } from '@angular/core';
import { MOVIES } from 'src/app/mocks/movies';
import { Movie } from './interfaces/movie';
import { of } from 'rxjs';

export enum SortBy {
  rating = 'rating',
  title = 'title',
  releaseDate = 'releaseDate'
}

export enum SortByOrder {
  rating = -1,
  title = 1,
  releaseDate = -1
}

type SortByOrderStrings = keyof typeof SortByOrder;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _sortBy: SortBy = SortBy.title;

  private movies: Array<Movie> = MOVIES;

  constructor() { }

  set sortBy(sortBy: SortBy) {
    this._sortBy = sortBy;
  }

  get sortBy() {
    return this._sortBy;
  }

  findAll() {
    const k: SortByOrderStrings = this._sortBy;
    const order: SortByOrder = SortByOrder[k];
    const movies = this.movies.sort((a, b) => {
      console.log(k, order);
      if (a[k] < b[k]) {
        return -1 * order;
      }
      if (a[k] > b[k]) {
        return 1 * order;
      }
      return 0;
    });
    console.log(movies);
    return of(movies);
  }
}
