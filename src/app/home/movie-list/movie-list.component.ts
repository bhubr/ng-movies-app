import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: '[app-movie-list]',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Observable<Movie[]> | null = null;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.findAll();
  }

}
