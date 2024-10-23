import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  search: string = '/img/searchHelper.svg'

  titles = [
    {
      title: "Lorem ipsum "
    },
    {
      title: "Lorem ipsum "
    },
    {
      title: "Lorem ipsum "
    },
    {
      title: "Lorem ipsum "
    },
  ]

  currentSlideIndex: number = 0;
}
