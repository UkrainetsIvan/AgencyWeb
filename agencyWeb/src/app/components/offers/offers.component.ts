import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  webSite: string = "/img/website.svg";
  seo: string = "/img/seo.svg";
  vr: string = "/img/vr.svg";
  mobile: string = "/img/mobile.svg";
}
