import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
interface ArticlesResponse {
    articles: Array<any>;
  }
  
  interface SourcesResponse {
    sources: Array<any>;
  }
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  api_key = '3def0a3cd8124d349f0d5dff145ab14f';

  constructor(private http: HttpClient) {
  }

  initSources(): Observable<SourcesResponse> {
    return this.http.get<SourcesResponse>('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  initArticles(): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
