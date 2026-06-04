export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  link?: string;
  imageAlt: string;
  imageDesc: string;
}

export const projects: Project[] = [
  {
    id: 'securelink',
    title: 'SecureLink',
    description: 'P2P encrypted messaging application leveraging Web Crypto API (RSA-OAEP) and Socket.io for true end-to-end security without central data storage.',
    stack: ['React', 'Node.js', 'Socket.io', 'Supabase', 'Web Crypto API'],
    githubUrl: 'https://github.com/mdruhankarim/P2P',
    // demoUrl: '#',
    imageAlt: 'SecureLink UI',
    imageDesc: 'A close up shot of a computer monitor displaying complex cryptographic code and a minimalist chat interface in a dark mode theme. The screen emits a soft cyan glow against a pitch-black background. High tech, cybersecurity aesthetic.'
  },
  {
    id: 'dsa-tracker',
    title: 'DSA Study Tracker',
    description: 'Interactive DSA learning tool with an XP system and spaced repetition scheduling to track algorithmic problem-solving progress.',
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    githubUrl: 'https://github.com/mdruhankarim/Study-Tracker',
    // demoUrl: 'https://dsa-tracker.ruhan.dev',
    imageAlt: 'Study Tracker Dashboard',
    imageDesc: 'A sleek, dark-themed dashboard interface displaying data visualizations, graphs, and algorithmic flowcharts. The UI elements are accented with deep violet and neon purple colors. Minimalist, data-driven design style.'
  },
  {
    id: 'python-scratch',
    title: 'Python From Scratch',
    description: 'Udemy course on Python fundamentals covering core syntax, object-oriented programming, and basic scripting concepts.',
    stack: ['Python', 'Educational Content'],
    link: 'https://www.udemy.com/user/mdruhankarim',
    imageAlt: 'Python Code on Screen',
    imageDesc: 'A macro shot of lines of Python code glowing on a dark computer monitor, emphasizing the technical neo-noir aesthetic with vibrant cyan and deep violet hues against a pure black background. Cinematic lighting.'
  }
];
