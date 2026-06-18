export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'minecraft' | 'python' | 'web';
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  stars?: number;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100%
  category: 'Minecraft' | 'Python' | 'AI Tools' | 'Web' | 'Other';
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  tags: string[];
  iconType: 'minecraft' | 'python' | 'ai';
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export type ThemeMode = 'developer' | 'creative';

export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  aiSuggestedReply?: string;
}
