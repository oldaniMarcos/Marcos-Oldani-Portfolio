import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../data/projects.data';
import { ProjectLinksDialog } from '../project-links-dialog/project-links-dialog';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({required: true}) project!: Project;

  // linksOpen = false;

  @Output() linksClick = new EventEmitter<void>;

  openLinks(): void {
    this.linksClick.emit();
  }

}
