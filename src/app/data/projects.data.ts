export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;

  images?: ProjectImage[];
  mediaAspectRatio?: string;

  tags: string[];
  technologies?: string[];

  github?: string;
  kaggle?: string;

  links?: ProjectLink[];

  featured?: boolean;
  academic?: boolean;
}

export function projectAnchorId(project: Project): string {
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `project-${slug}`;
}

export const PROJECTS: Project[] = [
  {
    title: 'BirdNET Bird Monitoring',
    description:
      'A proof of concept for acoustic bird monitoring in a nature reserve in Misiones. An Android app identifies birds from their calls on-device with BirdNET V2.4, syncs the detections to Supabase, and a web dashboard shows the species recorded.',

    images: [
      {
        src: 'projects/birdnet-web.png',
        alt: 'BirdNET bird monitoring web dashboard',
      },
      {
        src: 'projects/birdnet-app.jpeg',
        alt: 'BirdNET bird monitoring mobile app',
      }
    ],
    mediaAspectRatio: '4 / 3',

    tags: [
      'Machine Learning',
      'Mobile Development',
      'Web Development',
    ],

    technologies: [
      'Kotlin',
      'BirdNET',
      'LiteRT',
      'Supabase',
      'SQLite',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],

    // github: 'PENDIENTE',
    links: [
      { label: 'Live site', url: 'https://observatorio-aves.pages.dev/' },
    ],

    featured: true,
  },

  {
    title: 'Credit Card Fraud Predictions',
    description: 'A comparison of different machine learning algorithms for detecting fraudulent transactions, including KNN, Logistic Regression, K-Means, LightGBM, XGBoost.',

    images: [
      {
        src: 'projects/credit-card-fraud.jpeg',
        alt: 'Illustration of a credit card against a data network background',
      },
    ],

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
    title: 'Vehicle Detection and Tracking',
    description:
      'A computer vision system for detecting, classifying, and tracking vehicles in video using YOLO and ByteTrack.',

    images: [
      {
        src: 'projects/vehicle-detection.png',
        alt: 'Vehicle detection and tracking over a highway video frame',
      },
    ],

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
  },

  {
    title: "Sysarmy Salary Survey Dashboard",

    description:
      "Interactive Power BI dashboard analyzing salary trends, professional profiles, education, employment characteristics, and technology usage in Argentina's technology industry. The project includes extensive data preparation with Power Query, DAX measures and use of relationships for analyzing multi-valued fields.",

    images: [
      {
        src: 'projects/powerbi_1.png',
        alt: "Power BI salary survey dashboard with charts about Argentina's technology sector",
      },
      {
        src: 'projects/powerbi_2.png',
        alt: "Power BI salary survey dashboard with charts about Argentina's technology sector",
      },
      {
        src: 'projects/powerbi_3.png',
        alt: "Power BI salary survey dashboard with charts about Argentina's technology sector",
      },
      {
        src: 'projects/powerbi_4.png',
        alt: "Power BI salary survey dashboard with charts about Argentina's technology sector",
      },
    ],
    
    tags: [
      "Data Analysis",
      "Business Intelligence",
      "Data Visualization"
    ],

    technologies: [
      "Power BI",
      "Power Query",
      "DAX"
    ],

    github: "https://github.com/oldaniMarcos/Power-BI-sysarmy-Salary-Survey",
  },

  {
    title: 'Fruit and Vegetable Classification',
    description:
      'Image classification experiments comparing different deep learning architectures for fruit and vegetable recognition.',

    images: [
      {
        src: 'projects/fruits-vegetables-classification.png',
        alt: 'Collage of fruit and vegetable images used by the classifier',
      },
    ],

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

    images: [
      {
        src: 'projects/stock-dashboard-light.png',
        alt: 'Stock analysis dashboard showing a price chart, indicators, news, and summary',
      },
    ],

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

    images: [
      {
        src: 'projects/vet-system.png',
        alt: 'Veterinary management dashboard with client and appointment records',
      },
    ],

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

