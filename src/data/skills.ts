export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend & Systems',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Supabase', 'Socket.io', 'Web Crypto API', 'C++']
  }
];

export const allSkills: string[] = [
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'PostgreSQL',
  'Socket.io',
  'Web Crypto API',
  'Supabase',
  'Express',
  'C++'
];
