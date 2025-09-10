import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases';
  count: number;
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', count: 8 },
  { name: 'JavaScript', category: 'Languages', count: 12 },
  { name: 'TypeScript', category: 'Languages', count: 10 },
  { name: 'Java', category: 'Languages', count: 6 },
  { name: 'Go', category: 'Languages', count: 4 },
  
  // Frameworks
  { name: 'React', category: 'Frameworks', count: 15 },
  { name: 'Next.js', category: 'Frameworks', count: 8 },
  { name: 'Node.js', category: 'Frameworks', count: 10 },
  { name: 'TensorFlow', category: 'Frameworks', count: 5 },
  { name: 'Django', category: 'Frameworks', count: 6 },
  { name: 'Express', category: 'Frameworks', count: 8 },
  
  // Tools
  { name: 'Docker', category: 'Tools', count: 7 },
  { name: 'Kubernetes', category: 'Tools', count: 4 },
  { name: 'AWS', category: 'Tools', count: 9 },
  { name: 'Git', category: 'Tools', count: 20 },
  { name: 'Redis', category: 'Tools', count: 5 },
  
  // Databases
  { name: 'PostgreSQL', category: 'Databases', count: 8 },
  { name: 'MongoDB', category: 'Databases', count: 6 },
  { name: 'MySQL', category: 'Databases', count: 7 },
];

export const projects: Project[] = [
  {
    id: 'sketch-to-image-gan',
    title: 'Sketch-to-Image GAN',
    description: 'AI model that transforms hand-drawn sketches into photorealistic images using Generative Adversarial Networks.',
    skills: ['Python', 'TensorFlow', 'GAN', 'Computer Vision'],
    image: project1Image,
    liveUrl: 'https://sketch-gan-demo.vercel.app',
    sourceUrl: 'https://github.com/username/sketch-to-image-gan',
    featured: true
  },
  {
    id: 'realtime-chat-app',
    title: 'Real-time Chat Application',
    description: 'Scalable chat application with WebSocket connections, message encryption, and file sharing capabilities.',
    skills: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'TypeScript'],
    image: project3Image,
    sourceUrl: 'https://github.com/username/realtime-chat',
    featured: true
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
    skills: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS', 'TypeScript'],
    image: project2Image,
    liveUrl: 'https://ecommerce-demo.vercel.app',
    sourceUrl: 'https://github.com/username/ecommerce-platform'
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for analyzing large datasets with real-time updates and custom chart types.',
    skills: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
    image: project1Image,
    liveUrl: 'https://dataviz-dashboard.vercel.app',
    sourceUrl: 'https://github.com/username/data-dashboard'
  },
  {
    id: 'blockchain-voting-system',
    title: 'Blockchain Voting System',
    description: 'Secure voting platform using blockchain technology to ensure transparency and prevent fraud.',
    skills: ['Solidity', 'Web3', 'React', 'Ethereum', 'JavaScript'],
    image: project2Image,
    sourceUrl: 'https://github.com/username/blockchain-voting'
  },
  {
    id: 'ai-powered-recommendation',
    title: 'AI-Powered Recommendation Engine',
    description: 'Machine learning system that provides personalized recommendations using collaborative filtering.',
    skills: ['Python', 'Scikit-learn', 'Django', 'Redis', 'PostgreSQL'],
    image: project3Image,
    sourceUrl: 'https://github.com/username/recommendation-engine'
  }
];

export const personalInfo = {
  name: 'Alex Chen',
  title: 'Full-Stack Developer & AI Engineer',
  email: 'alex.chen@email.com',
  github: 'https://github.com/alexchen',
  linkedin: 'https://linkedin.com/in/alexchen',
  shortBio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications and AI-powered solutions. I love creating beautiful, functional software that makes a difference.',
  longBio: `I'm a full-stack developer and AI engineer with over 5 years of experience in building scalable web applications and machine learning solutions. My journey began with web development, but I quickly became fascinated by the possibilities of artificial intelligence and machine learning.

Throughout my career, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to cutting-edge AI applications. I'm particularly passionate about creating solutions that bridge the gap between complex technology and user-friendly experiences.

When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring the latest developments in AI and web technologies. I believe in continuous learning and enjoy sharing knowledge with the developer community.`,
  softSkills: [
    'Problem Solving',
    'Team Leadership', 
    'Communication',
    'Project Management',
    'Mentoring',
    'Critical Thinking',
    'Adaptability',
    'Time Management'
  ]
};