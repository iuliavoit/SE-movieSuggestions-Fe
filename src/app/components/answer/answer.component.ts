import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  title: string | null;
  url: string | null;

  constructor(public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAnswer();
  }

  getAnswer() {
    this.route.queryParams?.subscribe(value => {
      this.title = value['title'];
      this.url = value['url'];
    })
  }

}
