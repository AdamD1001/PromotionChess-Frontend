import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PromotionService} from "../promotion.service";

@Component({
  selector: 'app-ai-vs-ai-modal',
  templateUrl: './ai-vs-ai-modal.component.html',
  styleUrls: ['./ai-vs-ai-modal.component.css']
})
export class AiVsAiModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AiVsAiModalComponent>, private promotionService: PromotionService) {}

  didWhiteWin: Boolean = this.promotionService.getDidWhiteWin();
  ngOnInit() {
  }

  closeModal(){
    this.dialogRef.close();
  }

}
