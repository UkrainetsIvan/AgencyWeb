import { Component } from '@angular/core';
import {NavMenuComponent} from '../home/nav-menu/nav-menu.component';
import {OurServicesComponent} from './our-services/our-services.component';
import {RouterOutlet} from '@angular/router';
import {ListServicesComponent} from './list-services/list-services.component';
import {SimplyDummyComponent} from './simply-dummy/simply-dummy.component';
import {StatisticComponent} from './statistic/statistic.component';
import {OutLaterProjectComponent} from './out-later-project/out-later-project.component';
import {FormComponent} from '../home/form/form.component';
import {FooterComponent} from '../home/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NavMenuComponent,
    OurServicesComponent,
    RouterOutlet,
    ListServicesComponent,
    SimplyDummyComponent,
    StatisticComponent,
    OutLaterProjectComponent,
    FormComponent,
    FooterComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
