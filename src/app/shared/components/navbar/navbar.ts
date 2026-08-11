import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private viewportScroller = inject(ViewportScroller);

  scrollTo(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }

}
