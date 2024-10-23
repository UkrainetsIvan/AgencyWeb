import { Component } from '@angular/core';

@Component({
  selector: 'app-list-services',
  standalone: true,
  imports: [],
  templateUrl: './list-services.component.html',
  styleUrl: './list-services.component.scss'
})
export class ListServicesComponent {
  succlent: string = "/img/Succlent.svg";
  apps: string = "/img/apps.svg";
  rocket: string = "/img/racket.svg";
  mobile: string = "/img/purple-mobile.svg";
  vr: string = "/img/purple-vr.svg";
}
