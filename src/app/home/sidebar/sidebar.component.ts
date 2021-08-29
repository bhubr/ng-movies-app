import { Component, OnInit } from '@angular/core';
import { MovieService, SortBy } from 'src/app/movie.service';

@Component({
  selector: '[app-home-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  get sortBy() {
    return this.movieService.sortBy;
  }

  set sortBy(sortBy: SortBy) {
    this.movieService.sortBy = sortBy;
  }

}
