import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class News {

  constructor(private http: HttpClient) { }

  getTopHeadLines():Observable<Article[]>{
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business', {
      params: { apiKey }
    }).pipe(
      map(({articles}) => articles)
    );
  }

}
