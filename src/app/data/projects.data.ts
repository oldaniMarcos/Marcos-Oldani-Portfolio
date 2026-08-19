export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;

  image?: string;

  tags: string[];
  technologies?: string[];

  github?: string;
  kaggle?: string;

  links?: ProjectLink[];

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
    title: 'Credit Card Fraud Predictions',
    description: 'A comparison of different machine learning algorithms for detecting fraudulent transactions, including KNN, Logistic Regression, K-Means, LightGBM, XGBoost.',

    image: 'projects/credit-card-fraud.jpeg',

    tags: [
      'Machine Learning',
      'Fraud Detection',
      'Anomaly Detection'
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'LightGBM',
      'XGBoost',
      'Pandas',
      'Seaborn',
    ],

    links: [
      { label: 'KNN',                 url: 'https://www.kaggle.com/code/marcosoldani1360/2-credit-card-fraud-knn' },
      { label: 'Logistic Regression', url: 'https://www.kaggle.com/code/marcosoldani1360/3-credit-card-fraud-logistic-regression' },
      { label: 'K-Means',             url: 'https://www.kaggle.com/code/marcosoldani1360/4-credit-card-fraud-k-means-anomaly-detection' },
      { label: 'LightGBM',            url: 'https://www.kaggle.com/code/marcosoldani1360/5-credit-card-fraud-lightgbm' },
      { label: 'XGBoost',             url: 'https://www.kaggle.com/code/marcosoldani1360/6-credit-card-fraud-xgboost' },
    ],

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

  {
    title: 'Stock Market Dashboard',

    description: 'An interactive dashboard for analyzing stocks through historical price data, technical indicators, financial news, and AI-generated summaries.',

    image: 'projects/stock-dashboard-light.png',

    tags: [
      'Software Development',
      'Data Analysis',
      'Artificial Intelligence',
    ],

    technologies: [
      'Python',
      'PyQt6',
      'Pandas',
      'SQLAlchemy',
      'SQLite',
      'yfinance',
      'Gemini',
    ],

    github: 'https://github.com/oldaniMarcos/TPI-Soporte',

    academic: true,
  },

  {
    title: 'Veterinary Management System',

    description: 'Fullstack web application for managing clients, pets, veterinary appointments, payments, supplies, and more.',

    image: 'projects/vet-system.png',

    tags: [
      'Software Development',
      'Web Development',
    ],

    technologies: [
      'JavaScript',
      'Angular',
      'NestJS',
      'TypeORM',
      'MySQL',
    ],

    links: [
      { label: 'Frontend', url: 'https://github.com/oldaniMarcos/TPI-Seminario-Frontend'},
      { label: 'Backend', url: 'https://github.com/oldaniMarcos/TPI-Seminario-Backend'},
    ],

    academic: true,
  },
];