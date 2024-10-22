import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {SimplyDummyComponent} from './simply-dummy/simply-dummy.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NavMenuComponent,
    SimplyDummyComponent,
    RouterOutlet
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
