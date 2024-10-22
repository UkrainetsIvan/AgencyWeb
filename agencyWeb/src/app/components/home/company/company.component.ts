import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
    beneoshop: string = "/img/beneoshop.png";
    caspio: string = "/img/caspio.png";
    hyperGrid: string = "/img/HyperGrid.png";
    leotrippi: string = "/img/leotrippi.png";
}
