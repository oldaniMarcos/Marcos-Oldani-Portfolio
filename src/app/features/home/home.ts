import { Component } from '@angular/core';
import { About } from "./components/about/about";
import { ProjectsSection } from "./components/projects-section/projects-section";
import { Hero } from "./components/hero/hero";
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [About, ProjectsSection, Hero, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
