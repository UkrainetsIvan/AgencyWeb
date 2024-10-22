import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavMenuComponent,
    RouterOutlet
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
