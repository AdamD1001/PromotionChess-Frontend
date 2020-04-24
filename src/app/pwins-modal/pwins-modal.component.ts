import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-pwins-modal',
  templateUrl: './pwins-modal.component.html',
  styleUrls: ['./pwins-modal.component.css']
})
export class PWinsModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PWinsModalComponent>, private promotionService: PromotionService) {}

  currentDifficulty = this.promotionService.getDepthOfDifficulty();
  difficultyName;
  ngOnInit() {
    if(this.currentDifficulty == 1){
      this.difficultyName = 'Easy';
    }if(this.currentDifficulty == 2){
      this.difficultyName = 'Normal';
    }if(this.currentDifficulty == 3){
      this.difficultyName = 'Hard';
    }if(this.currentDifficulty == 4){
      this.difficultyName = 'Master';
    }
  }

  closeModal(){
    this.promotionService.setOnHomePage(true);
    this.dialogRef.close();
  }

}
