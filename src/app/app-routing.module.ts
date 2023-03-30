import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {SuggestionsComponent} from "./components/suggestions/suggestions.component";
import {AnswerComponent} from "./components/answer/answer.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'sugestii', component: SuggestionsComponent},
  {path: 'raspuns', component: AnswerComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
