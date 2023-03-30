import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import {ButtonModule} from "primeng/button";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AnswerComponent } from './components/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SuggestionsComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    FieldsetModule,
    BrowserAnimationsModule,
    PanelModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
