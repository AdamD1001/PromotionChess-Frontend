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

  startBoard: any;

  changeBoard: Function = (boardObj) => {
    this.startBoard.position(boardObj, true)
}

  public ngOnInit(): void{
    this.startBoard = ChessBoard('board1', {
      position: 'ppppkppp/pppppppp/8/8/8/8/PPPPPPPP/PPPPKPPP',
      draggable: true,
      onChange: onChange,
      onDrop: onDrop,
      onMoveEnd: onMoveEnd,
      onMouseoverSquare: onMouseoverSquare,
      onMouseoutSquare: onMouseoutSquare
    });

    let board = this.startBoard;

    // Sends board changes to move-list component
    function onChange (oldPos, newPos) {
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
        let searchRowIndex : number = row;
        let searchColIndex : number = col;
        if (orientation == "white") {
          if (pieceColor == "w") {
            // Look forward
            searchRowIndex = row - 1;
            searchColIndex = col;

            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              let searchSquare : string = allSquares[searchRowIndex][searchColIndex];
              if (searchSquare in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare);
                }
              }
              else {
                moves.push(searchSquare);
                // If in home "pawn launch row"
                if (allSquares[6].includes(square)) {
                  searchRowIndex -= 1;
                  if (0 <= searchRowIndex && searchRowIndex <= 7) {
                    searchSquare = allSquares[searchRowIndex][searchColIndex];
                    if (!(searchSquare in boardPos)) {
                      moves.push(searchSquare);
                    }
                  }
                }
              }
            }

            // Look Forward-Diagonal
            searchRowIndex = row - 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
                if (searchSquare1 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare1];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare1);
                  }
                }
              }
              if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
                if (searchSquare2 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare2];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare2);
                  }
                }
              }
            }

            // Look Sideways
            searchRowIndex = row;
            searchColIndex = col;
            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
              let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
              if (searchSquare1 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare1];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare1);
                }
              }
              else {
                moves.push(searchSquare1)
              }
            }
            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
              let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
              if (searchSquare2 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare2];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare2);
                }
              }
              else {
                moves.push(searchSquare2)
              }
            }

            // Look backward
            searchRowIndex = row + 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              let searchSquare : string = allSquares[searchRowIndex][searchColIndex];
              if (searchSquare in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare);
                }
              }
            }

            // Look Backward-Diagonal
            searchRowIndex = row + 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
                if (searchSquare1 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare1];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare1);
                  }
                }
              }
              if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
                if (searchSquare2 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare2];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare2);
                  }
                }
              }
            }
          }

          if (pieceColor == "b") {
            // Look forward
            searchRowIndex = row + 1;
            searchColIndex = col;

            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              let searchSquare : string = allSquares[searchRowIndex][searchColIndex];
              if (searchSquare in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare);
                }
              }
              else {
                moves.push(searchSquare);
                // If in home "pawn launch row"
                if (allSquares[1].includes(square)) {
                  searchRowIndex += 1;
                  if (0 <= searchRowIndex && searchRowIndex <= 7) {
                    searchSquare = allSquares[searchRowIndex][searchColIndex];
                    if (!(searchSquare in boardPos)) {
                      moves.push(searchSquare);
                    }
                  }
                }
              }
            }

            // Look Forward-Diagonal
            searchRowIndex = row + 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
                if (searchSquare1 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare1];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare1);
                  }
                }
              }
              if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
                if (searchSquare2 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare2];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare2);
                  }
                }
              }
            }

            // Look Sideways
            searchRowIndex = row;
            searchColIndex = col;
            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
              let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
              if (searchSquare1 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare1];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare1);
                }
              }
              else {
                moves.push(searchSquare1)
              }
            }
            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
              let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
              if (searchSquare2 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare2];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare2);
                }
              }
              else {
                moves.push(searchSquare2)
              }
            }

            // Look backward
            searchRowIndex = row - 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              let searchSquare : string = allSquares[searchRowIndex][searchColIndex];
              if (searchSquare in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare);
                }
              }
            }

            // Look Backward-Diagonal
            searchRowIndex = row - 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
                if (searchSquare1 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare1];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare1);
                  }
                }
              }
              if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
                if (searchSquare2 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare2];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare2);
                  }
                }
              }
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
            // Look Up
            searchRowIndex = row - 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex];
              if (searchSquare1 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare1];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare1);
                }
              }
              else {
                moves.push(searchSquare1);
              }
            }

            // Look Down
            searchRowIndex = row + 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex];
              if (searchSquare1 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare1];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare1);
                }
              }
              else {
                moves.push(searchSquare1);
              }
            }

            // Look Sideways
            searchRowIndex = row;
            searchColIndex = col;
            if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
              let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
              if (searchSquare1 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare1];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare1);
                }
              }
              else {
                moves.push(searchSquare1)
              }
            }
            if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
              let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
              if (searchSquare2 in boardPos) {
                let bogeyPiece : string = boardPos[searchSquare2];
                let bogeyColor : string = bogeyPiece[0];
                if (pieceColor != bogeyColor) {
                  moves.push(searchSquare2);
                }
              }
              else {
                moves.push(searchSquare2)
              }
            }

            // Look Up-Diagonal
            searchRowIndex = row - 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
                if (searchSquare1 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare1];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare1);
                  }
                }
                else {
                  moves.push(searchSquare1);
                }
              }
              if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
                if (searchSquare2 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare2];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare2);
                  }
                }
                else {
                  moves.push(searchSquare2);
                }
              }
            }

            // Look Down-Diagonal
            searchRowIndex = row + 1;
            searchColIndex = col;
            if (0 <= searchRowIndex && searchRowIndex <= 7) {
              if (0 <= (searchColIndex - 1) && (searchColIndex - 1) <= 7) {
                let searchSquare1 : string = allSquares[searchRowIndex][searchColIndex - 1];
                if (searchSquare1 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare1];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare1);
                  }
                }
                else {
                  moves.push(searchSquare1);
                }
              }
              if (0 <= (searchColIndex + 1) && (searchColIndex + 1) <= 7) {
                let searchSquare2 : string = allSquares[searchRowIndex][searchColIndex + 1];
                if (searchSquare2 in boardPos) {
                  let bogeyPiece : string = boardPos[searchSquare2];
                  let bogeyColor : string = bogeyPiece[0];
                  if (pieceColor != bogeyColor) {
                    moves.push(searchSquare2);
                  }
                }
                else {
                  moves.push(searchSquare2);
                }
              }
            }
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
    function promote(oldBoardObj, newBoardObj, newPos, piece) {
      let enemyPiece: any;
      let promotingPiece = piece;
      let newPromotion: any;

      //Finds and stores enemy piece type
          for(let key in oldBoardObj){
            if(key === newPos){
              enemyPiece = oldBoardObj[key]
            }
          //Finds and stores current player piece type
          
        }

        //Still need to compare attacking and taken pieces in order to determine what rank to promote to
        if(promotingPiece == "wP" || promotingPiece == "bP"){
          if(enemyPiece == "wK" || enemyPiece == "bK"){
            for(let key in newBoardObj){
              if(key === newPos){
                if(promotingPiece == "wP"){
                  newBoardObj[key] = "wB";
                }else {
                  newBoardObj[key] = "bB";
                }
              }
            }
          }else if(enemyPiece == "wQ" || enemyPiece == "bQ"){
            for(let key in newBoardObj){
              if(key === newPos){
                if(promotingPiece == "wP"){
                  newBoardObj[key] = "wK";
                }else {
                  newBoardObj[key] = "bK";
                }
              }
            }
          }else {
            for(let key in newBoardObj){
              if(key === newPos){
                if(promotingPiece == "wP"){
                  newBoardObj[key] = "wR";
                }else {
                  newBoardObj[key] = "bR";
                }
              }
            }
          }
        }else if(promotingPiece == "wR" || promotingPiece == "bR"){
            if(enemyPiece == "wQ" || enemyPiece == "bQ"){
              for(let key in newBoardObj){
                if(key === newPos){
                  if(promotingPiece == "wR"){
                    newBoardObj[key] = "wK";
                  }else {
                    newBoardObj[key] = "bK";
                  }
                }
              }
            }else {
              for(let key in newBoardObj){
                if(key === newPos){
                  if(promotingPiece == "wR"){
                    newBoardObj[key] = "wB";
                  }else {
                    newBoardObj[key] = "bB";
                  }
                }
              }
            }
        }else if(promotingPiece == "wB" || promotingPiece == "bB"){
          for(let key in newBoardObj){
            if(key === newPos){
              if(promotingPiece == "wB"){
                newBoardObj[key] = "wN";
              }else {
                newBoardObj[key] = "bN";
              }
            }
          }
        }else{
            for(let key in newBoardObj){
              if(key == newPos){
                if(promotingPiece == "wN"){
                  newBoardObj[key] = "wQ"
                }else {
                  newBoardObj[key] = "bQ"
                }
              }
            }
        }

        //returns the newly changed Board Object as a FEN String, 
        //if No change was made then FEN will be returned unchanged
        return newBoardObj
    }

    // Returns true if a piece was taken between 2 board states
    // Return Type: boolean
    function wasPieceTaken(oldBoardObj, newBoardObj) {
      console.log(Object.entries(oldBoardObj).length)
      console.log(Object.entries(newBoardObj).length)
        if(Object.entries(oldBoardObj).length > Object.entries(newBoardObj).length){
          return true
        } else {
          return false
        }

    }

    // Outlines all legal moves for given pos
    // Return Type: void
    function showLegalMoves(square, piece, boardPos, orientation) {
      let legalMoves : string[] = getLegalMoves(square, piece, boardPos, orientation);
      for (let i : number = 0; i < legalMoves.length; i++) {
        let tempSqName : string = legalMoves[i];
        let squareElement : Element = document.getElementsByClassName("square-" + tempSqName)[0];

        // Create Overlay Div
        let newElement : Element = document.createElement('div');
        newElement.className = "legal-overlay";
        newElement.id = `${tempSqName}-overlay`;
        newElement.setAttribute("style", "background-color: springgreen; opacity: 0.4; width: 100%; height: 100%; position: relative; z-index: 0; float: right");
        squareElement.insertAdjacentElement('afterbegin', newElement);

        // Make sure each time to make all chess-piece images float above
        // TODO: See if this style attribute can be applied fewer times, rather than every method call
        let imgElements : HTMLCollection = document.getElementsByClassName('piece-417db');
        for (let i : number = 0; i < imgElements.length; i++) {
          let tempElement : Element = imgElements[i];
          let tempAttr : string = tempElement.getAttribute("style");
          tempAttr += "; z-index: 0; position: absolute;";
          tempElement.setAttribute("style", tempAttr);
        }
      }
    }

    // Removes outlines of all legal moves for given pos
    // Return Type: void
    function hideLegalMoves(square, piece, boardPos, orientation) {
      let overlayElements : HTMLCollection = document.getElementsByClassName("legal-overlay");
      console.log(overlayElements);
      // While there is a first element in overlayElements
      while (overlayElements[0]) {
        let overlaySq : Element = overlayElements[0];
        overlaySq.parentNode.removeChild(overlaySq);
      }
    }

    // Activates whenever player-drag move has been made
    function onDrop(source, target, piece, newPos, oldPos, orientation) {
      console.log("OnDrop was Called!")
      hideLegalMoves(source, piece, oldPos, orientation);

      let legalSpaces = getLegalMoves(source, piece, oldPos, orientation);
      let wasLegal: boolean;
      wasLegal = false;

      for(let key in legalSpaces){
        if(target === legalSpaces[key]){
          wasLegal = true;
        }
      }

      if(!wasLegal){
        return 'snapback'
      }else{
        console.log(oldPos)
        console.log(newPos)
        if(wasPieceTaken(oldPos, newPos)){
          console.log("Made it to wasPieceTaken")
          console.log(promote(oldPos, newPos, target, piece))
          
          board.position(promote(oldPos, newPos, target, piece), true)
          return 'trash'
        }
      }
    }

    // Activates whenever animation has occurred (AI has made move)
    function onMoveEnd(oldPos, newPos) {

    }

    //Activates whenever mouse enters square
    function onMouseoverSquare(square, piece, boardPos, orientation){
      if (piece) {
        console.log("\n");
        console.log("TEST getLegalMoves()");
        showLegalMoves(square, piece, boardPos, orientation);
        console.log(getLegalMoves(square, piece, boardPos, orientation));
      }
    }

    //Activates whenever mouse leaves square
    function onMouseoutSquare(square, piece, boardPos, orientation){
      if (piece) {
        hideLegalMoves(square, piece, boardPos, orientation);
      }
    }


  }

  showPosition() {
    let p = 'c2';
    let pos = this.startBoard.position();
      console.log(Object.entries(this.startBoard.position()).length)
      for(let [key, value] of Object.entries(this.startBoard.position())){
        if(key === p){
          console.log(key + ": " + value)
        }
      }
      for(let key in pos) {
        if(key == p){
          pos[key] = "wQ"
          console.log(ChessBoard.objToFen(pos))
        }
      }
    }
}
