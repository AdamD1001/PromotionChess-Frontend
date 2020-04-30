import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RulesPageComponent } from '../rules-page/rules-page.component';

@Component({
  selector: 'app-playervs-ai',
  templateUrl: './playervs-ai.component.html',
  styleUrls: ['./playervs-ai.component.css']
})
export class PlayervsAIComponent implements OnInit {

  constructor(private matDialog: MatDialog, private promotionService: PromotionService) { }

  ngOnInit() {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "900px";
    dialogConfig.width = "800px";
    const modalDialog = this.matDialog.open(RulesPageComponent, dialogConfig);
  }

}
