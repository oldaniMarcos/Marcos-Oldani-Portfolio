import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  private viewportScroller = inject(ViewportScroller);

  scrollTo(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }

}
