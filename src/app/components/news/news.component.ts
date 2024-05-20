import { Component } from '@angular/core';
import { News } from 'src/app/news';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsList: News[] = []; // Typed as an array of NewsItem

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: (response) => {
        this.newsList = response;
        console.log('News data:', this.newsList);
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      }
    });
  }
}
