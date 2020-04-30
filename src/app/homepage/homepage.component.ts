import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../promotion.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RulesPageComponent } from '../rules-page/rules-page.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(public router: Router, private promotionService: PromotionService, private matDialog: MatDialog) { 
  }
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

  resetMoves(){
    this.promotionService.resetMoveList();
  }
  
}
