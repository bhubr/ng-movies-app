export interface Movie {
  id: number;
  title: string;
  picture: string;
  rating: number; 
  releaseDate: string;
  genres: Array<string>;
}
