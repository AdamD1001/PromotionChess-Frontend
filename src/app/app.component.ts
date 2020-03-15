import {Component, NgModule, OnInit} from '@angular/core';
import { BoardComponent } from './board/board.component';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PromoChessFrontend';




}
