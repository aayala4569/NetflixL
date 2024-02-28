import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_videos: 'true',
    language: 'en-us',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjRhNjBhZGE0ZDU0NzgyOGMzYzNkY2U3NDc1YmE1YiIsInN1YiI6IjY1ZDY5MzBmYzVjMWVmMDE3ZDhiMzllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2YE4hbzRcUyzI0pzJkL5io99IgLWczTnNn1av_ebiY',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }
}
