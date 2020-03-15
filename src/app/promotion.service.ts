import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private moves: Array<{ id: number, piece: String, source: String, target: String, fen: String}> = [];
  private urlREST : string = "http://localhost:8080/PromotionChessAPI/api/chess";

  constructor(private http: HttpClient) { }

  addMoveToList(index, chosenPiece, src, tar, newFen) {
    this.moves.push({id: index, piece: chosenPiece, source: src, target: tar, fen: newFen});

    // console.log('addMoveToList was called!');
    // console.log(this.moves)
  }

  getMoveList() {
    return this.moves;
  }

  getAIMove(boardPackage: object): Observable<string> {
    return this.http.post<any>(this.urlREST, boardPackage);
  }
}
