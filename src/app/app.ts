import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Hero } from "./features/home/components/hero/hero";
import { About } from "./features/home/components/about/about";
import { ProjectsSection } from "./features/home/components/projects-section/projects-section";
import { Contact } from "./features/home/components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, About, ProjectsSection, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(
    private router: Router
  ) {}
}
