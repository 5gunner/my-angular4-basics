import { Scientist } from './../../scientist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientist-item',
  templateUrl: './scientist-item.component.html',
  styleUrls: ['./scientist-item.component.sass']
})
export class ScientistItemComponent implements OnInit {
  scientists: Scientist[] = [
    new Scientist('Pratik Rai', 'Whoosh', 'https://cdn.pixabay.com/photo/2015/05/11/15/35/scientist-762627_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
