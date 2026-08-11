import { Component, Input } from '@angular/core';
import { Project } from '../../../data/projects.data';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({required: true}) project!: Project;

}
