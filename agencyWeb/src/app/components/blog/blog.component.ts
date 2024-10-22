import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NavMenuComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
