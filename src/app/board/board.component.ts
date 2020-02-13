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
      onDrop: onDrop,
      onMoveEnd: onMoveEnd,
      onMouseoverSquare: onMouseoverSquare,
      onMouseoutSquare: onMouseoutSquare,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd
    });

    // Sends board changes to move-list component
    function onChange (oldPos, newPos) {
      console.log("onChange() was called!: ");
      console.log("oldPos:");
      console.log(oldPos);
      console.log("newPos:");
      console.log(newPos);
    }

    // Activates whenever player-drag move has been made
    function onDrop(source, target, piece, newPos, oldPos, orientation) {

    }

    // Activates whenever animation has occurred (AI has made move)
    function onMoveEnd(oldPos, newPos){

    }

    //Activates whenever mouse enters square
    function onMouseoverSquare(square, piece, boardPos, orientation){

    }

    //Activates whenever mouse leaves square
    function onMouseoutSquare(square, piece, boardPos, orientation){

    }

    //TODO: onDragStart should not be needed anymore
    function onDragStart (source, piece, position, orientation) {
      // if(orientation === 'white' && piece.search(/^w/) === -1) {
      //   return false;
      // }
      // else {
      //   console.log(source)
      // }
    }

    //TODO: onDragEnd should not be needed anymore
    function onDragEnd (source, piece, position, orientation) {

    }


  }
  showPosition() {
      console.log(this.board.position().a8)
    }
}
