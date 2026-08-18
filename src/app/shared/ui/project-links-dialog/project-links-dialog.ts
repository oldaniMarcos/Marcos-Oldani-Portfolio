import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ProjectLink } from '../../../data/projects.data';

@Component({
  selector: 'app-project-links-dialog',
  imports: [],
  templateUrl: './project-links-dialog.html',
  styleUrl: './project-links-dialog.css',
})
export class ProjectLinksDialog {

  @Input({ required: true }) title!: string;
  @Input({ required: true }) links!: ProjectLink[];

  @Output() close = new EventEmitter<void>();

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('dialog-backdrop')) {
      this.close.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

}
