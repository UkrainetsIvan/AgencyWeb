import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {NgClass, NgForOf} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {InfoComponent} from './info/info.component';
import {MoreInfoComponent} from './more-info/more-info.component';
import {FormComponent} from '../home/form/form.component';
import {FooterComponent} from '../home/footer/footer.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NavMenuComponent,
    NgClass,
    NgForOf,
    RouterOutlet,
    NewsComponent,
    InfoComponent,
    MoreInfoComponent,
    FormComponent,
    FooterComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
