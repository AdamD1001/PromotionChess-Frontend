import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromotionService } from '../promotion.service';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private promotionService: PromotionService, private router: Router) {
    this.form = this.formBuilder.group({
      formControl: [this.difficulty[1]]

    });

  }
  submit() {
    console.log(this.form.value);
    //this.promotionService.setDepthOfDifficulty(this.form.value)

  }

  isWhite() {}

  isBlack() {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href);
    if(this.href === "/"){
      this.promotionService.setOnHomePage(true);
    }else{
      this.promotionService.setOnHomePage(false);
    }

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
