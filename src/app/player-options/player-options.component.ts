import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-player-options',
  templateUrl: './player-options.component.html',
  styleUrls: ['./player-options.component.css']
})
export class PlayerOptionsComponent implements OnInit {
  form: FormGroup;
  difficulty = [];

  constructor(private formBuilder: FormBuilder, private promotionService: PromotionService) {
    this.form = this.formBuilder.group({
      difficulty: ['']
    });

    this.difficulty = this.getDifficulty();
  }

  getDifficulty() {
    return [
      {level: 1, name: 'Very Easy'},
      {level: 2, name: 'Easy'},
      {level: 3, name: 'Medium'},
      {level: 4, name: 'Hard'}
    ];
  }
  submit() {
    console.log(this.form.value);
    //this.promotionService.setDepthOfDifficulty(this.form.value)

  }

  isWhite() {}

  isBlack() {}

  ngOnInit() {
    this.isWhite = () => {
      this.promotionService.setPlayerOrientation("white");
      this.promotionService.setDepthOfDifficulty(this.form.value["difficulty"]);
    };

    this.isBlack = () => {
      this.promotionService.setPlayerOrientation("black");
      this.promotionService.setDepthOfDifficulty(this.form.value["difficulty"]);
    };
  }

}
