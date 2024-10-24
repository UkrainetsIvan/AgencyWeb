import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborate',
  standalone: true,
  imports: [],
  templateUrl: './collaborate.component.html',
  styleUrl: './collaborate.component.scss'
})
export class CollaborateComponent {
  avatar: string = "/img/Beverly.svg";
  world: string = "/img/world-map.png";
  gps: string = "/img/gps.svg";
  phone: string = "/img/active-phone.svg";
  facebook: string = "/img/facebook_icon.svg";
  instagram: string = "/img/instagram.svg";
  twitter: string = "/img/twitter.svg";
  linkedIn: string = "/img/linkedIn.svg";
}
