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
  ngOnInit() {

    this.listOfMoves = this.promotionService.getMoveList();

    console.log(this.listOfMoves)

  }


}
