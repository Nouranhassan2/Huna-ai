import { CurrentPromptComponent } from './components/current-prompt/current-prompt.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { PromptsComponent } from './components/prompts/prompts.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: ShowCaseComponent },

  { path: 'toolDetails/:id', component: DetailsComponent },
  { path: 'prompts', component: PromptsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'newsDetails/:id', component: NewsDetailsComponent },

  { path:'currentPrompts',component:CurrentPromptComponent},
  { path: 'home', component: HomeComponent },

  { path: 'signup', component: SignUpComponent },


  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
