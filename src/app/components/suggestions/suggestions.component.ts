import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  countries: string[] = [];
  times: string[] = [];
  actors: string[] = [];

  selectedCountry: string;
  selectedTime: string;
  selectedActor: string;

  constructor(public router: Router,
              private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.selectedActor = '';
    this.selectedCountry = '';
    this.selectedTime = '';
    this.getData();
  }

  getData() {
    this.dataService.getAllQuestionAnswers().subscribe(data=>{
      this.countries = data.countries;
      this.times = data.times;
      this.actors = data.actors;
    })
  }

  findSuggestion() {
    this.router.navigate(['/raspuns']);
    this.dataService.sendAnswer(this.selectedCountry, this.selectedTime, this.selectedActor).subscribe(data=>{
      localStorage.setItem("title",JSON.stringify(data.title));
      localStorage.setItem("url", JSON.stringify(data.imdbUrl));
      this.router.navigate(['/raspuns']);
    });
  }

}
