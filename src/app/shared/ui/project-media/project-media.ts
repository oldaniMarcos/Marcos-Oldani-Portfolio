import { Component, Input } from '@angular/core';
import { ProjectImage } from '../../../data/projects.data';

@Component({
  selector: 'app-project-media',
  templateUrl: './project-media.html',
  styleUrl: './project-media.css',
})
export class ProjectMedia {
  @Input({ required: true }) images!: ProjectImage[];
  @Input() label = 'Project images';
  @Input() aspectRatio = '16 / 10';

  currentIndex = 0;

  private pointerStart: { x: number; y: number } | null = null;
  private ignoreNextClick = false;

  previous(): void {
    if (this.images.length > 1) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }

  next(): void {
    if (this.images.length > 1) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }

  showImage(index: number): void {
    if (index >= 0 && index < this.images.length) {
      this.currentIndex = index;
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previous();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    }
  }

  onPointerDown(event: PointerEvent): void {
    this.ignoreNextClick = false;

    if (this.images.length < 2 || !event.isPrimary || event.button !== 0) {
      return;
    }

    this.pointerStart = { x: event.clientX, y: event.clientY };

    const slide = event.currentTarget as HTMLElement | null;
    if (slide && typeof slide.setPointerCapture === 'function') {
      slide.setPointerCapture(event.pointerId);
    }
  }

  onPointerUp(event: PointerEvent): void {
    if (!this.pointerStart) {
      return;
    }

    const deltaX = event.clientX - this.pointerStart.x;
    const deltaY = event.clientY - this.pointerStart.y;
    this.pointerStart = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    event.preventDefault();
    this.ignoreNextClick = true;
    deltaX < 0 ? this.next() : this.previous();
  }

  onPointerCancel(): void {
    this.pointerStart = null;
    this.ignoreNextClick = false;
  }

  onSlideClick(event: MouseEvent): void {
    if (this.ignoreNextClick) {
      event.preventDefault();
      event.stopPropagation();
      this.ignoreNextClick = false;
    }
  }
}
