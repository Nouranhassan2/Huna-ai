import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromptsComponent } from './components/prompts/prompts.component';
import { CurrentPromptComponent } from './components/current-prompt/current-prompt.component';
import { SafeURLPipe } from './safe-url.pipe';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, NotfoundComponent, NavbarComponent, ShowCaseComponent, HeroComponent, FeaturesComponent, AboutUsComponent, FooterComponent, PromptsComponent, CurrentPromptComponent, SafeURLPipe, SignUpComponent, NewsComponent, NewsDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
