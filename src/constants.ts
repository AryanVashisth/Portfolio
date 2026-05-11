import { Project, Skill, Certification, BlogPost, Experience } from './types';

export const SKILLS: Skill[] = [
  { name: 'Machine Learning', category: 'Core' },
  { name: 'NLP', category: 'Core' },
  { name: 'Computer Vision', category: 'Core' },
  { name: 'Python', category: 'Tech' },
  { name: 'TensorFlow', category: 'Tech' },
  { name: 'Docker', category: 'Tech' },
  { name: 'Pandas', category: 'Data' },
  { name: 'NumPy', category: 'Data' },
  { name: 'YOLO', category: 'Tech' },
  { name: 'OpenCV', category: 'Tech' },
  { name: 'Selenium', category: 'Tech' },
  { name: 'Scikit-learn', category: 'Tech' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Soil Health Restoration System',
    description: 'A crop recommendation system trained on 2,200 samples with a bilingual interface for non-technical users to improve accessibility.',
    tags: ['Machine Learning', 'Data Science', 'Python'],
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a38b5?auto=format&fit=crop&q=80',
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'Fake News Detection System',
    description: 'Advanced classification system handling class imbalance using SMOTE and combining TF-IDF with contextual signals.',
    tags: ['NLP', 'Scikit-learn', 'SMOTE'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80',
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'MoodSync',
    description: 'AI-Based Mood Analysis system converting emotional input into structured features with user behavior tracking.',
    tags: ['AI', 'Python', 'Feature Engineering'],
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80',
    link: '#',
    github: '#',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'Python for AI & ML',
    issuer: 'IIT Kanpur',
    date: '2024',
    link: '#',
    icon: 'Cloud',
  },
  {
    id: 'c2',
    title: 'Generative AI',
    issuer: 'Google Cloud',
    date: '2024',
    link: '#',
    icon: 'Layout',
  },
  {
    id: 'c3',
    title: 'Python',
    issuer: 'Kaggle',
    date: '2024',
    link: '#',
    icon: 'BarChart',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Scaling Object Detection with YOLO',
    excerpt: 'A comprehensive guide on building and deploying YOLO-based object detection systems.',
    date: 'Oct 24, 2024',
    readTime: '8 min read',
    category: 'Computer Vision',
    image: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: 'b2',
    title: 'Handling Class Imbalance in NLP',
    excerpt: 'Exploring techniques like SMOTE and contextual signals to improve classification metrics.',
    date: 'Nov 12, 2024',
    readTime: '6 min read',
    category: 'NLP',
    image: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: 'b3',
    title: 'Automating Workflows with Selenium',
    excerpt: 'Practical tips for building extraction pipelines using XPath and pixel targeting.',
    date: 'Dec 05, 2024',
    readTime: '10 min read',
    category: 'Automation',
    image: 'https://picsum.photos/seed/blog3/600/400',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    company: 'Central Warehousing Corporation',
    role: 'AI Intern',
    period: 'Jul 2024 - Aug 2024',
    description: [
      'Reverse-engineered a multi-step warehouse management system to find automation opportunities.',
      'Built a Selenium-based extraction pipeline using XPath and pixel targeting.',
      'Built an NLP-based command interface to run workflows, cutting processing time by 60%.'
    ],
  },
  {
    id: 'e2',
    company: 'Global Infoventures',
    role: 'AI/ML Trainee',
    period: '2024',
    description: [
      'Trained deep learning models on NVIDIA DGX A100 for faster experimentation.',
      'Built a YOLO-based object detection system from scratch including manual annotation.',
      'Worked on production CV pipelines including PPE violation detection.'
    ],
  },
];
