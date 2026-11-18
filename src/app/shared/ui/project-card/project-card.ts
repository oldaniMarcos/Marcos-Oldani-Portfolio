import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project, projectAnchorId } from '../../../data/projects.data';
import { ProjectMedia } from '../project-media/project-media';
import { ProjectLinksDialog } from '../project-links-dialog/project-links-dialog';

@Component({
  selector: 'app-project-card',
  imports: [ProjectMedia],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({required: true}) project!: Project;
  readonly projectAnchorId = projectAnchorId;

  // linksOpen = false;

  @Output() linksClick = new EventEmitter<void>;

  openLinks(): void {
    this.linksClick.emit();
  }

}
