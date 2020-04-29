import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RulesPageComponent } from '../rules-page/rules-page.component';
import { AiVsAiModalComponent } from '../ai-vs-ai-modal/ai-vs-ai-modal.component'

declare var ChessBoard: any;
@Component({
  selector: 'app-ai-vs-ai',
  templateUrl: './ai-vs-ai.component.html',
  styleUrls: ['./ai-vs-ai.component.css']
})
export class AiVsAiComponent implements OnInit {

  constructor(private promotionService: PromotionService, public matDialog: MatDialog) { }

  startBoard: any;
  orientation: string = this.promotionService.getPlayerOrientation();
  ngOnInit() {
    this.startBoard = ChessBoard('board1', {
      position: 'ppppkppp/pppppppp/8/8/8/8/PPPPPPPP/PPPPKPPP',
      draggable: false,
      orientation: this.orientation
    });
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "80%";
    dialogConfig.width = "60%";
    const modalDialog = this.matDialog.open(RulesPageComponent, dialogConfig);
  }

  openGameOverModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(AiVsAiModalComponent, dialogConfig);
  }

}
