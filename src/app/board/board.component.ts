import { Component, OnInit } from '@angular/core';

declare var ChessBoard: any;
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  title = 'PromoChessFrontend';

  constructor(){}

  board: any;

  ngOnInit(): void{
    this.board = ChessBoard('board1', {
      position: 'ppppkppp/pppppppp/8/8/8/8/PPPPPPPP/PPPPKPPP',
      draggable: true,
      onChange: onChange,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd
    });

    function onChange (source, piece, position, orientation) {

    }

    function onDragStart (source, piece, position, orientation) {
      if(orientation === 'white' && piece.search(/^w/) === -1) {
        return false;
      }
      else {
        console.log(source)
      }
    }

    function onDragEnd (source, piece, position, orientation) {
      
    }

    
  }
  showPosition() {
      console.log(this.board.position().a8)
    }
}
