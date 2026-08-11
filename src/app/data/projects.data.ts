export interface Project {
  title: string;
  description: string;

  image?: string;

  tags: string[];
  technologies?: string[];

  github?: string;
  kaggle?: string;

  featured?: boolean;
  academic?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'Vehicle Detection and Tracking',
    description:
      'A computer vision system for detecting, classifying, and tracking vehicles in video using YOLO and ByteTrack.',

    image: 'projects/vehicle-detection.png',

    tags: [
      'Computer Vision',
      'Machine Learning',
    ],

    technologies: [
      'Python',
      'YOLO',
      'OpenCV',
      'ByteTrack',
    ],

    github: 'https://github.com/oldaniMarcos/OpenCV-Vehicle-Detection',

    featured: true,
  },

  {
    title: 'Fruit and Vegetable Classification',
    description:
      'Image classification experiments comparing different deep learning architectures for fruit and vegetable recognition.',

    image: 'projects/fruits-vegetables-classification.png',

    tags: [
      'Deep Learning',
      'Computer Vision',
    ],

    technologies: [
      'Python',
      'PyTorch',
      'ResNet',
      'EfficientNet',
      'Vision Transformer',
    ],

    kaggle: 'https://www.kaggle.com/code/marcosoldani1360/utn-fruit-and-vegetable-classification',

    academic: true,
  },
];