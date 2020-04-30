import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private didWhiteWin: Boolean = true;
  private depthOfDifficulty: number = 2;
  private playerOrientation: string = "white";
  private moves: Array<{ id: number, piece: String, source: String, target: String, fen: String, promoted: boolean}> = [];
  private urlREST : string = "http://localhost:8080/PromotionChess/api/chess";
  public isPOSTLoading : boolean = false; // TODO: Should consider using this variable to display some loading symbol

  fenString: any = 'ppppkppp/pppppppp/8/8/8/8/PPPPPPPP/PPPPKPPP';
  constructor(private http: HttpClient) { }

  addMoveToList(index, chosenPiece, src, tar, newFen, promo) {
    this.moves.push({id: index, piece: chosenPiece, source: src, target: tar, fen: newFen, promoted: promo});

    // console.log('addMoveToList was called!');
    // console.log(this.moves)
  }

  undoMovesFromList() {
    this.moves.pop();
    this.moves.pop();
  }

  getMoveList() {
    return this.moves;
  }

  // Returns AI's best move in the form of a board fenString once POST request has successfully finished
  async getAIBestMove(boardPackage: object) {
    return await this.sendBoardPostRequest(boardPackage).then();
  }

  // Submits POST request and returns Promise
  sendBoardPostRequest(boardPackage: object) {
    return new Promise((resolve, reject) => {
      this.http.post(this.urlREST, boardPackage, { observe: 'body', responseType: 'text'}).toPromise()
          .then(
              res => {
                setTimeout(function() {
                  resolve(res.toString());
                }, 2000);
              },
              msg => {
                console.log("POST Error: " + msg.toString());
                reject("Error");
              }
          )
    });
  }

  getPlayerOrientation() {
    return this.playerOrientation;
  }

  setPlayerOrientation(orientation: string) {
    this.playerOrientation = orientation;
  }

  getDepthOfDifficulty(){
    return this.depthOfDifficulty;
  }

  setDepthOfDifficulty(depth: number) {
    this.depthOfDifficulty = depth;
  }

  getDidWhiteWin(){
    return this.didWhiteWin;
  }

  setDidWhiteWin(value: Boolean){
    this.didWhiteWin = value;
  }

  resetMoveList(){
    this.moves = [];
  }
}
