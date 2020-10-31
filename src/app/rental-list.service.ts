import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./Movie";

@Injectable({
  providedIn: "root"
})
export class RentalListService {
  constructor(private http: HttpClient) {}
  movies: Movie[];

  getRentalList() {
    return this.http.get("http://localhost:3000/rentalList");
  }

  private setMovies() {
    this.getRentalList().subscribe((items: Movie[]) => (this.movies = items));
  }

  addRenatlList(movie: Movie) {
    this.setMovies();
    if (!this.movies || !this.movies.find(x => x.id == movie.id)) {
      return this.http.post("http://localhost:3000/rentalList/", {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        stars: movie.stars,
        rating: movie.rating,
        onSale: movie.onSale
      });
    }
  }

  deleteRenatlList(id: number) {
    return this.http.delete("http://localhost:3000/rentalList/" + id);
  }
}
