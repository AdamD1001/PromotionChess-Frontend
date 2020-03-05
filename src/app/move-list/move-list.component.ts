import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  constructor(private promotionService: PromotionService) { }

  moveList;
  ngOnInit() {

    this.moveList = this.promotionService.getMoveList().reverse();

  }


}
