import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/services/news';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  constructor(private news: News) {}

  ngOnInit(){
    this.news.getTopHeadLines().subscribe(articles =>{
      console.log(articles)
    })
  }
}
