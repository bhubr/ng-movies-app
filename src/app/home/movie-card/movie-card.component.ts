import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: '[app-movie-card]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
