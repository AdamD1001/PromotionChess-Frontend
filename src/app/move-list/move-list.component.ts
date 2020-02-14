import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list: any[] = [
    {"move" : "Pawn: a2 to a3"},
    {"move" : "Pawn: a2 to a3"},
    {"move" : "Pawn: a2 to a3"},
    {"move" : "Pawn: a2 to a3"},
    {"move" : "Pawn: a2 to a3"}
  ];

}
