import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayervsAIComponent } from './playervs-ai/playervs-ai.component';
import { AiVsAiComponent } from './ai-vs-ai/ai-vs-ai.component';
import { PlayerOptionsComponent } from './player-options/player-options.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  }, 
  {
    path: 'player-options',
    component: PlayerOptionsComponent
  },
  {
    path: 'playervs-ai',
    component: PlayervsAIComponent
  },
  {
    path: 'ai-vs-ai',
    component: AiVsAiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
