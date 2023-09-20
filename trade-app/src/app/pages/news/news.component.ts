import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  mArticles!: Array<any>;
  mSources!: Array<any>;
  selectedSource: string; 

  constructor(
    private PagesService: PagesService,
  ) {
    this.selectedSource = ''; 
  }

  ngOnInit() {
    this.PagesService.initSources().subscribe(data => this.mSources = data['sources']);
    if (this.mSources.length > 0) {
      this.selectedSource = this.mSources[0].id;
      this.loadArticles();
    }
  }

  onSourceChange() {
    console.log("selected source is: " + this.selectedSource);
    this.loadArticles();
  }

  loadArticles() {
    this.PagesService.getArticlesByID(this.selectedSource).subscribe(data => this.mArticles = data['articles']);
  }
}
