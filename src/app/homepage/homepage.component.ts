import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  href: string = "";
  onHomePage: boolean = this.promotionService.getOnHomePage();

  constructor(private router: Router, private promotionService: PromotionService) { 
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href);
    if(this.href === "/"){
      this.onHomePage = true;
      this.promotionService.setOnHomePage(true);
    }else{
      this.onHomePage = false;
      this.promotionService.setOnHomePage(false);
    }
  }

}
