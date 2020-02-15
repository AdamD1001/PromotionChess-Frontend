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
      onMouseoutSquare: onMouseoutSquare
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
      // Represents indexes of allSquares array that corresponds with the given square
      let row : number;
      let col : number;
      let moves : string[] = [];
      let allSquares : Array<string[]>;

      // 2D Array of all square combinations
      allSquares = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
      ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
      ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
      ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
      ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
      ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
      ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
      ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];

      // Assign row and col values
      for (let i: number = 0; i < allSquares.length; i++) {
        if (allSquares[i].includes(square)) {
          row = i;
          col = allSquares[i].indexOf(square)
        }
      }

      //pieceType will return uppercase symbol
      pieceType = piece.toString()[1];
      //pieceColor will return lowercase char ('w' or 'b')
      pieceColor = piece.toString()[0];

      // If piece is Pawn
      // TODO: Need clarification on exactly how pawn ATTACK moves work
      // Can it attack in any 1 distance range (including forward, sideways, back-diagonal, and reverse)
      if (pieceType == "P") {
        if (orientation == "white") {
          if (pieceColor == "w") {
            // If in home "pawn launch row"
            if (allSquares[6].includes(square)) {

            }
            else {

            }
          }
          if (pieceColor == "b") {
            // If in home "pawn launch row"
            if (allSquares[1].includes(square)) {

            }
            else {

            }
          }
        }
      }
      else {
        let searchRowIndex : number = row;
        let searchColIndex : number = col;

        switch(pieceType) {
            // Rook
          case "R":
            // Look up
            searchRowIndex = row;
            while (searchRowIndex > 0) {
              --searchRowIndex;
              let upSquare : string = allSquares[searchRowIndex][col];
              // If another piece exists in square
              if (upSquare in boardPos) {
                let bogeyPiece : string = boardPos[upSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(upSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(upSquare);
              }
            }

            // Look down
            searchRowIndex = row;
            while (searchRowIndex < 7) {
              ++searchRowIndex;
              let downSquare : string = allSquares[searchRowIndex][col];
              // If another piece exists in square
              if (downSquare in boardPos) {
                let bogeyPiece : string = boardPos[downSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(downSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(downSquare);
              }
            }

            // Look left
            searchColIndex = col;
            while (searchColIndex > 0) {
              --searchColIndex;
              let leftSquare : string = allSquares[row][searchColIndex];
              // If another piece exists in square
              if (leftSquare in boardPos) {
                let bogeyPiece : string = boardPos[leftSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(leftSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(leftSquare);
              }
            }

            // Look right
            searchColIndex = col;
            while (searchColIndex < 7) {
              ++searchColIndex;
              let rightSquare : string = allSquares[row][searchColIndex];
              // If another piece exists in square
              if (rightSquare in boardPos) {
                let bogeyPiece : string = boardPos[rightSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(rightSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(rightSquare);
              }
            }

            break;

            // Bishop
          case "B":
            // Look North East
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex > 0 && searchColIndex < 7) {
              --searchRowIndex;
              ++searchColIndex;
              let NESquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (NESquare in boardPos) {
                let bogeyPiece : string = boardPos[NESquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(NESquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(NESquare);
              }
            }

            // Look South East
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex < 7 && searchColIndex < 7) {
              ++searchRowIndex;
              ++searchColIndex;
              let SESquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (SESquare in boardPos) {
                let bogeyPiece : string = boardPos[SESquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(SESquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(SESquare);
              }
            }

            // Look South West
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex < 7 && searchColIndex > 0) {
              ++searchRowIndex;
              --searchColIndex;
              let SWSquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (SWSquare in boardPos) {
                let bogeyPiece : string = boardPos[SWSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(SWSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(SWSquare);
              }
            }

            // Look North West
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex > 0 && searchColIndex > 0) {
              --searchRowIndex;
              --searchColIndex;
              let NWSquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (NWSquare in boardPos) {
                let bogeyPiece : string = boardPos[NWSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(NWSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(NWSquare);
              }
            }

            break;

            // Knight
          case "N":
            break;

            // Queen
          case "Q":
            // Look up
            searchRowIndex = row;
            while (searchRowIndex > 0) {
              --searchRowIndex;
              let upSquare : string = allSquares[searchRowIndex][col];
              // If another piece exists in square
              if (upSquare in boardPos) {
                let bogeyPiece : string = boardPos[upSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(upSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(upSquare);
              }
            }

            // Look down
            searchRowIndex = row;
            while (searchRowIndex < 7) {
              ++searchRowIndex;
              let downSquare : string = allSquares[searchRowIndex][col];
              // If another piece exists in square
              if (downSquare in boardPos) {
                let bogeyPiece : string = boardPos[downSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(downSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(downSquare);
              }
            }

            // Look left
            searchColIndex = col;
            while (searchColIndex > 0) {
              --searchColIndex;
              let leftSquare : string = allSquares[row][searchColIndex];
              // If another piece exists in square
              if (leftSquare in boardPos) {
                let bogeyPiece : string = boardPos[leftSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(leftSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(leftSquare);
              }
            }

            // Look right
            searchColIndex = col;
            while (searchColIndex < 7) {
              ++searchColIndex;
              let rightSquare : string = allSquares[row][searchColIndex];
              // If another piece exists in square
              if (rightSquare in boardPos) {
                let bogeyPiece : string = boardPos[rightSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(rightSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(rightSquare);
              }
            }

            // Look North East
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex > 0 && searchColIndex < 7) {
              --searchRowIndex;
              ++searchColIndex;
              let NESquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (NESquare in boardPos) {
                let bogeyPiece : string = boardPos[NESquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(NESquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(NESquare);
              }
            }

            // Look South East
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex < 7 && searchColIndex < 7) {
              ++searchRowIndex;
              ++searchColIndex;
              let SESquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (SESquare in boardPos) {
                let bogeyPiece : string = boardPos[SESquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(SESquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(SESquare);
              }
            }

            // Look South West
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex < 7 && searchColIndex > 0) {
              ++searchRowIndex;
              --searchColIndex;
              let SWSquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (SWSquare in boardPos) {
                let bogeyPiece : string = boardPos[SWSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(SWSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(SWSquare);
              }
            }

            // Look North West
            searchRowIndex = row;
            searchColIndex = col;
            while (searchRowIndex > 0 && searchColIndex > 0) {
              --searchRowIndex;
              --searchColIndex;
              let NWSquare : string = allSquares[searchRowIndex][searchColIndex];
              // If another piece exists in square
              if (NWSquare in boardPos) {
                let bogeyPiece : string = boardPos[NWSquare];
                let bogeyColor : string = bogeyPiece[0];
                // Taking your own piece is not legal
                if (pieceColor != bogeyColor) {
                  moves.push(NWSquare);
                }
                // Another piece has been reached, cannot proceed any further
                break;
              }
              // No piece detected, add square to list of legal moves
              else {
                moves.push(NWSquare);
              }
            }

            break;

            // King
            // TODO: isCheckmate function is needed to determine king moves
          case "K":
            break;
          default:
            console.log("Error in getLegalMoves()! Piece type invalid!");
            break;
        }
      }
      return moves;
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
    function onMoveEnd(oldPos, newPos) {

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
        console.log(getLegalMoves(square, piece, boardPos, orientation));
      }
    }

    //Activates whenever mouse leaves square
    function onMouseoutSquare(square, piece, boardPos, orientation){

    }


  }
  showPosition() {
      console.log(this.board.position().a8)
    }
}
