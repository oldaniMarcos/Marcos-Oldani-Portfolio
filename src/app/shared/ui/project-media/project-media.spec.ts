import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectImage } from '../../../data/projects.data';
import { ProjectMedia } from './project-media';

describe('ProjectMedia', () => {
  let fixture: ComponentFixture<ProjectMedia>;

  const images: ProjectImage[] = [
    { src: 'first.png', alt: 'First view' },
    { src: 'second.png', alt: 'Second view' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectMedia] }).compileComponents();
    fixture = TestBed.createComponent(ProjectMedia);
    fixture.componentRef.setInput('images', images);
    fixture.componentRef.setInput('label', 'Test project images');
    fixture.detectChanges();
  });

  it('shows the first image and carousel controls', () => {
    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    expect(image.getAttribute('src')).toBe('first.png');
    expect(image.alt).toBe('First view');
    expect(fixture.nativeElement.querySelectorAll('.carousel-indicator').length).toBe(2);
  });

  it('changes images with the arrow buttons and wraps around', () => {
    const next = fixture.nativeElement.querySelector('.carousel-next') as HTMLButtonElement;
    const previous = fixture.nativeElement.querySelector('.carousel-previous') as HTMLButtonElement;

    next.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('second.png');

    next.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('first.png');

    previous.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('second.png');
  });

  it('changes to a selected image with the indicator buttons', () => {
    const indicators = fixture.nativeElement.querySelectorAll('.carousel-indicator');

    indicators[1].click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('second.png');
  });

  it('supports arrow-key navigation', () => {
    fixture.nativeElement.querySelector('.project-media').dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
    );
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('second.png');
  });

  it('changes images on a horizontal pointer swipe', () => {
    const slide = fixture.nativeElement.querySelector('.project-media-slide') as HTMLElement;
    const pointerEvent = (type: string, clientX: number) =>
      new PointerEvent(type, {
        bubbles: true,
        isPrimary: true,
        button: 0,
        pointerId: 1,
        clientX,
        clientY: 40,
      });

    slide.dispatchEvent(pointerEvent('pointerdown', 160));
    slide.dispatchEvent(pointerEvent('pointerup', 80));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('second.png');
  });
});
