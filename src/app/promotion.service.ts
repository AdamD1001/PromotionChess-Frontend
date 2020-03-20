import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private moves: Array<{ id: number, piece: String, source: String, target: String, fen: String}> = [];
  private urlREST : string = "http://localhost:8080/PromotionChess/api/chess";

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
    // let postOptions = {observe: 'response', responseType: 'text'};
    let postOptions: {
      headers?: HttpHeaders,
      observe?: 'body',
      params?: HttpParams,
      reportProgress?: boolean,
      responseType: 'text',
      withCredentials?: boolean};
    // } = {
    //   responseType: 'text'
    // };
    //data => this.data = data
    return this.http.post(this.urlREST, boardPackage, { observe: 'body', responseType: 'text'});
  }
}
