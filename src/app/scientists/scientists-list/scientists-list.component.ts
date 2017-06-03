import { Scientist } from './../scientist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientists-list',
  templateUrl: './scientists-list.component.html',
  styleUrls: ['./scientists-list.component.sass']
})
export class ScientistsListComponent implements OnInit {
  scientists: Scientist[] = [
    new Scientist('Pratik Rai', 'Whoosh', 'https://cdn.pixabay.com/photo/2015/05/11/15/35/scientist-762627_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
