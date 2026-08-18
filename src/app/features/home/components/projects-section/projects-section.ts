import { Component, Renderer2 } from '@angular/core';
import { ProjectCard } from '../../../../shared/ui/project-card/project-card';
import { Project, PROJECTS } from '../../../../data/projects.data';
import { ProjectLinksDialog } from '../../../../shared/ui/project-links-dialog/project-links-dialog';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, ProjectLinksDialog],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
  projects = PROJECTS;

  selectedProject: Project | null = null;

  constructor(private renderer: Renderer2) {}

  openLinks(project: Project): void {
    this.selectedProject = project;

    this.renderer.addClass(document.body, 'dialog-open');
  }

  closeLinks(): void {
    this.selectedProject = null;

    this.renderer.removeClass(document.body, 'dialog-open');
  }
}
