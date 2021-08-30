import { Injectable } from '@angular/core';
import { MOVIES } from 'src/app/mocks/movies';
import { Movie } from './interfaces/movie';
import { BehaviorSubject } from 'rxjs';

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

  private _sortBy: SortBy = SortBy.rating;

  private movies: Movie[] = MOVIES;

  private movies$: BehaviorSubject<Movie[]>;

  constructor() {
    this.movies$ = new BehaviorSubject(this.sort());
  }

  set sortBy(sortBy: SortBy) {
    this._sortBy = sortBy;
    this.movies$.next(this.sort());
  }

  get sortBy() {
    return this._sortBy;
  }

  sort(): Movie[] {
    const k: SortByOrderStrings = this._sortBy;
    const order: SortByOrder = SortByOrder[k];
    return this.movies.sort((a: Movie, b: Movie) => {
      console.log(k, order);
      if (a[k] < b[k]) {
        return -1 * order;
      }
      if (a[k] > b[k]) {
        return 1 * order;
      }
      return 0;
    });
  }

  findAll() {
    return this.movies$;
  }
}
