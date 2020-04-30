import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  constructor(private promotionService: PromotionService) { }

  listOfMoves;
  listOfURLs: Array<{ name: String, url: String}> = [
    {name: 'wP', url: '../../img/chesspieces/wikipedia/wP.png'},
    {name: 'bP', url: '../../img/chesspieces/wikipedia/bP.png'},
    {name: 'wR', url: '../../img/chesspieces/wikipedia/wR.png'},
    {name: 'bP', url: '../../img/chesspieces/wikipedia/bR.png'},
    {name: 'wB', url: '../../img/chesspieces/wikipedia/wB.png'},
    {name: 'bB', url: '../../img/chesspieces/wikipedia/bB.png'},
    {name: 'wN', url: '../../img/chesspieces/wikipedia/wN.png'},
    {name: 'bN', url: '../../img/chesspieces/wikipedia/bN.png'},
    {name: 'wQ', url: '../../img/chesspieces/wikipedia/wQ.png'},
    {name: 'bQ', url: '../../img/chesspieces/wikipedia/bQ.png'}
  ];
  ngOnInit() {

    this.listOfMoves = this.promotionService.getMoveList();
  }

  findImage(piece: String){
    for(let pic of this.listOfURLs){
      if(piece == pic.name){
        return pic.url;
      }
    }
  }


}
