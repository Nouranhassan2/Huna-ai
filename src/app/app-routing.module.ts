import { CurrentPromptComponent } from './components/current-prompt/current-prompt.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { PromptsComponent } from './components/prompts/prompts.component';

const routes: Routes = [
  { path: '', component: ShowCaseComponent },

  { path: 'toolDetails/:id', component: DetailsComponent },
  { path: 'prompts', component: PromptsComponent },

  { path:'currentPrompts',component:CurrentPromptComponent},
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
