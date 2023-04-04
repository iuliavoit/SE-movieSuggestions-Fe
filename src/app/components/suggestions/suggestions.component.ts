import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  countries: string[] = [];
  genres: string[] = [];
  times: string[] = [];
  actors: string[] = [];


  selectedCountry: string;
  selectedTime: string;
  selectedGenre: string;
  selectedActor: string;

  constructor(public router: Router,
              private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.selectedActor = '';
    this.selectedCountry = '';
    this.selectedTime = '';
    this.selectedGenre = '';
    this.getData();
  }

  getData() {
    this.dataService.getAllQuestionAnswers().subscribe(data => {
      this.countries = data.countries;
      this.genres = data.genres;
      this.times = data.times;
      this.actors = data.actors;
    })
  }

  findSuggestion() {
    this.router.navigate(['/raspuns']);
    this.dataService.sendAnswer(this.selectedCountry, this.selectedGenre, this.selectedTime, this.selectedActor).subscribe(data => {
      this.router.navigate(['/raspuns'],
        {
          queryParams: {
            title: data.title,
            url: data.imdbUrl,
          }
        });
    });
  }

  isDisabled(): boolean {
    return (this.selectedActor==='' || this.selectedTime==='' || this.selectedGenre==='' || this.selectedCountry==='' );
  }

}
