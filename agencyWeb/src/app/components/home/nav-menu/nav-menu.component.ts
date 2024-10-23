import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
   checker: boolean = true;
   currentPage: boolean = true;

   toggleActivePage(): void {
     this.currentPage === !this.currentPage
     console.log(this.currentPage)
   }
}
