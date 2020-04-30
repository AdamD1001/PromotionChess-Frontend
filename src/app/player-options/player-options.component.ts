import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-player-options',
  templateUrl: './player-options.component.html',
  styleUrls: ['./player-options.component.css']
})
export class PlayerOptionsComponent implements OnInit {
  href: string = "";

  form: FormGroup;
  difficulty = [
    {level: 1, name: 'Easy'},
      {level: 2, name: 'Normal'},
      {level: 3, name: 'Hard'},
      {level: 4, name: 'Master'}
  ];

  constructor(private formBuilder: FormBuilder, private promotionService: PromotionService) {
    this.form = this.formBuilder.group({
      formControl: [this.difficulty[1]]

    });

  }
  submit() {
    console.log(this.form.value);
    this.promotionService.setDepthOfDifficulty(this.form.value.level)

  }

  isWhite() {}

  isBlack() {}

  ngOnInit() {

    this.isWhite = () => {
      console.log(this.form.value);
      console.log(this.form.value.formControl.level);
      this.promotionService.setPlayerOrientation("white");
      this.promotionService.setDepthOfDifficulty(this.form.value.formControl.level);
      this.promotionService.resetMoveList();
    };

    this.isBlack = () => {
      this.promotionService.setPlayerOrientation("black");
      this.promotionService.setDepthOfDifficulty(this.form.value.formControl.level);
      this.promotionService.resetMoveList();
    };
  }

}
