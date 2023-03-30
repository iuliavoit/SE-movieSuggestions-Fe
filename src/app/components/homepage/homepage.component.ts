import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.clearStorageData();
  }

  clearStorageData() {
    localStorage.removeItem("title");
    localStorage.removeItem("url");
  }

}
