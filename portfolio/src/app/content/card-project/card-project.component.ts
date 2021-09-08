import { Component, OnInit } from '@angular/core';
import { CardProject } from './card-project';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  cardProject: CardProject = {
    id : 1,
    name: "first project",
    img: "path/to/img",
    description: "test card project."
  };
  constructor() { }

  ngOnInit(): void {
  }

}
