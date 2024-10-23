import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {RouterOutlet} from '@angular/router';
import {ListServicesComponent} from './list-services/list-services.component';
import {SimplyDummyComponent} from './simply-dummy/simply-dummy.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NavMenuComponent,
    OurServicesComponent,
    RouterOutlet,
    ListServicesComponent,
    SimplyDummyComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
