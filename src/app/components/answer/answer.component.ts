import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  title: string | null;
  url: string | null;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.getAnswerFromLs();
  }

  getAnswerFromLs() {
    this.title = localStorage.getItem("title");
    this.url = localStorage.getItem("url");
  }

}
