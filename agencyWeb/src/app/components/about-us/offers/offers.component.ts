import { Component } from '@angular/core';
import {ButtonWithBorderComponent} from '../../component/button-with-border/button-with-border.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    ButtonWithBorderComponent
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
    apps: string = "/img/apps.svg";
    rocket: string = "/img/racket.svg";
    mobile: string = "/img/purple-mobile.svg";
    cloud: string = "/img/cloud.svg";
}
