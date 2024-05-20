import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  newsInfo: any;
  constructor(
    private _Activated: ActivatedRoute,
    private _service: NewsService
  ) {}

  ngOnInit(): void {
    let x = this._Activated.snapshot.params['id'];
  
    this._service.newsDetails(x).subscribe({
      next: (response) => {
        this.newsInfo = response;
        console.log("Loaded new info:", this.newsInfo);
      },
      error: (err) => {
        console.error("Failed to load new details:", err);
      },
    });
  }
}
