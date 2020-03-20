import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private moves: Array<{ id: number, piece: String, source: String, target: String, fen: String}> = [];

  fenString: any = 'ppppkppp/pppppppp/8/8/8/8/PPPPPPPP/PPPPKPPP';
  constructor() { }

  addMoveToList(index, chosenPiece, src, tar, newFen) {
    this.moves.push({id: index, piece: chosenPiece, source: src, target: tar, fen: newFen});
    
    console.log('addMoveToList was called!');
    console.log(this.moves)
  }

  getMoveList() {
    return this.moves;
  }
}
