import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Movie } from "./Movie";
import { MovieService } from "./movie.service";
import { RentalListService } from "./rental-list.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  flops$;
  rentalList$;

  constructor(
    private movieService: MovieService,
    private rentalListService: RentalListService
  ) {}

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.getRentalList();
  }

  getRentalList() {
    this.rentalList$ = this.rentalListService.getRentalList();
  }

  addToRentalList(movie: Movie) {
    console.log("Movie:" + movie.title);
    this.rentalList$ = this.rentalListService.addRenatlList(movie).subscribe();
    this.getRentalList();
  }

  deleteRentalList(id: number) {
    console.log("Delete Id:" + id);
    this.rentalList$ = this.rentalListService.deleteRenatlList(id).subscribe();
    this.getRentalList();
  }
}
