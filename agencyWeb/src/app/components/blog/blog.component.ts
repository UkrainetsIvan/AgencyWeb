import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {NgClass, NgForOf} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NewsComponent} from './news/news.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NavMenuComponent,
    NgClass,
    NgForOf,
    RouterOutlet,
    NewsComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
