import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../../data/projects.data';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', {
      title: 'Test project',
      description: 'A project used by this test.',
      images: [{ src: 'test.png', alt: 'Test project screenshot' }],
      tags: [],
    } satisfies Project);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders project media through the shared carousel component', () => {
    expect(fixture.nativeElement.querySelector('.project-media img')?.getAttribute('src')).toBe('test.png');
  });
});
