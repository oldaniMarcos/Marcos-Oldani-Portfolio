import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PROJECTS, Project, projectAnchorId } from '../../../../data/projects.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly featuredProjects = PROJECTS.filter((project) => project.featured);
  readonly projectAnchorId = projectAnchorId;

  private viewportScroller = inject(ViewportScroller);

  scrollTo(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }

  scrollToProject(project: Project, event: MouseEvent): void {
    if (event.target instanceof Element && event.target.closest('a, button')) {
      return;
    }

    this.viewportScroller.scrollToAnchor(projectAnchorId(project));
  }

}
