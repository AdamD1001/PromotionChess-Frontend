import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MoveListComponent } from './move-list/move-list.component';
import { UserButtonsComponent } from './user-buttons/user-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MoveListComponent,
    UserButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
