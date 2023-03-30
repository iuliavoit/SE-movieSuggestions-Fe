import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Question} from "../models/question";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllQuestionAnswers(): Observable<Question> {
    return this.httpClient.get<Question>(`${environment.ApiUrl}/questionAnswers`);
  }

  sendAnswer(country: string, genre: string, time: string, actor: string) {
    return this.httpClient.post<any>(`${environment.ApiUrl}/answer`, {country, genre, time, actor});
  }
}
