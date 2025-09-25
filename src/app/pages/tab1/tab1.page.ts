import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/services/news';
import { Article } from '../../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];

  constructor(private news: News) {}

  ngOnInit(){
    this.news.getTopHeadLines().subscribe(
      articles => this.articles.push(...articles)
    );
  }
}
