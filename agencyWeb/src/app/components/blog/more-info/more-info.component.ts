import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-more-info',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.scss'
})
export class MoreInfoComponent {
  publics = [
    {
      image: "/img/manInSuit.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      avatar: "/img/avatar_3.svg",
      author: "Name here",
      date: "20.12.2020",
    },
    {
      image: "/img/stuffOnTuble.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      avatar: "/img/avatar_2.svg",
      author: "Name here",
      date: "20.12.2020",
    },
    {
      image: "/img/table.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      avatar: "/img/avatar_1.svg",
      author: "Name here",
      date: "20.12.2020",
    },
    {
      image: "/img/manInSuit.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      avatar: "/img/avatar_3.svg",
      author: "Name here",
      date: "20.12.2020",
    },
    {
      image: "/img/stuffOnTuble.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      avatar: "/img/avatar_2.svg",
      author: "Name here",
      date: "20.12.2020",
    },
    {
      image: "/img/table.png",
      title: "Lorem Ipsum is simply dummy text of the printing.",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      avatar: "/img/avatar_1.svg",
      author: "Name here",
      date: "20.12.2020",
    },
  ]
}
