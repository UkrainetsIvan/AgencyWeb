import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {RouterOutlet} from '@angular/router';
import {CollaborateComponent} from './collaborate/collaborate.component';
import {HelloFormComponent} from './hello-form/hello-form.component';
import {FooterComponent} from '../home/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavMenuComponent,
    RouterOutlet,
    CollaborateComponent,
    HelloFormComponent,
    FooterComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
