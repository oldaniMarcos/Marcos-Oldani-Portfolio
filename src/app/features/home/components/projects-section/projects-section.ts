import { Component } from '@angular/core';
import { ProjectCard } from '../../../../shared/ui/project-card/project-card';
import { PROJECTS } from '../../../../data/projects.data';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
  projects = PROJECTS;
}
