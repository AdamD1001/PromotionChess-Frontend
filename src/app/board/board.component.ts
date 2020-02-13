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

    // Returns an array of all valid position objects for the given piece
    // Return Type: ArrayList[]
    function getLegalMoves(square, piece, boardPos, orientation) {
      let pieceType : string;
      let pieceColor : string;
      let row : number;
      let col : string;
      let moves : Array<string>;

      //pieceType will return uppercase symbol
      pieceType = piece.toString()[1];
      //pieceColor will return lowercase char ('w' or 'b')
      pieceColor = piece.toString()[0];

      row = +square.toString()[1];
      col = square.toString()[0];

      console.log(col);
      console.log(row);

      // console.log(String.fromCharCode(col.charCodeAt(0) + 1));
      // console.log((row + 1));

      if (orientation == "white") {
        if (pieceColor == "w") {
          switch (pieceType){
            case "P":
              break;
            case "R":
              break;
            case "B":
              break;
            case "N":
              break;
            case "Q":
              break;
            case "K":
              break;
          }
        }
        if (pieceColor == "b") {

        }
      }
    }

    // Returns board with promoted chess piece
    // Return Type: Fen String
    function promote(oldBoardObj, newBoardObj, newPos) {

    }

    // Returns true if a piece was taken between 2 board states
    // Return Type: boolean
    function wasPieceTaken(oldBoardObj, newBoardObj) {

    }

    // Outlines all legal moves for given pos
    // Return Type: void
    function showLegalMoves(pos) {

    }

    // Removes outlines of all legal moves for given pos
    // Return Type: void
    function hideLegalMoves(pos) {

    }

    // Activates whenever player-drag move has been made
    function onDrop(source, target, piece, newPos, oldPos, orientation) {

    }

    // Activates whenever animation has occurred (AI has made move)
    function onMoveEnd(oldPos, newPos){

    }

    //Activates whenever mouse enters square
    function onMouseoverSquare(square, piece, boardPos, orientation){
      if (piece) {
        console.log("Mouseover() was called!");
        console.log("square:");
        console.log(square);
        console.log("piece:");
        console.log(piece);
        console.log("boardPos:");
        console.log(boardPos);
        console.log("orientation:");
        console.log(orientation);

        console.log("\n");
        console.log("TEST getLegalMoves()");
        getLegalMoves(square, piece, boardPos, orientation)
      }
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
