import { Project, Skill, Service, TimelineEntry, Stat } from './types';

export const HERO_TITLES = [
  'Minecraft Developer',
  'Python Programmer',
  'AI Enthusiast',
  'Software Innovator'
];

export const PROJECTS: Project[] = [
  {
    id: 'mythbound',
    title: 'MythBound: Elemental Fate',
    description: 'A masterpiece custom Minecraft adventure datapack & resource pack featuring interactive elemental powers, RPG quest nodes, customized mechanical spells, and full procedural game logic.',
    tech: ['Minecraft', 'Datapacks', 'Custom Spells', 'Resource Packs'],
    category: 'minecraft',
    githubUrl: 'https://github.com/Talha/mythbound-datapack',
    demoUrl: 'https://youtube.com/watch?v=elemental-fate',
    stars: 124,
    featured: true
  },
  {
    id: 'fpsx-plus',
    title: 'FPSX+ Engine Concept',
    description: 'An advanced modular client-side game and configuration optimizer. Delivers up to a 60% FPS boost through deep algorithmic block optimizations and clean game-state multi-threading concepts.',
    tech: ['Minecraft', 'Optimization', 'Performance', 'Python Engine'],
    category: 'minecraft',
    githubUrl: 'https://github.com/Talha/fpsx-performance-profile',
    demoUrl: 'https://talha.dev/fpsx',
    stars: 87,
    featured: true
  },
  {
    id: 'stickman-companion',
    title: 'Desktop Stickman Companion',
    description: 'A charming interactive Python-based overlay companion script. The desktop character detects layout borders, interacts with open system windows with custom gravity mechanics, and assists with user shortcuts.',
    tech: ['Python', 'PyGame UI', 'Win32 API', 'System Scripts'],
    category: 'python',
    githubUrl: 'https://github.com/Talha/desktop-stickman-companion',
    demoUrl: 'https://talha.dev/stickman',
    stars: 92,
    featured: true
  },
  {
    id: 'resource-pack-creator',
    title: 'MC Resource Pack Creator Overlay',
    description: 'A sleek custom browser application helping server designers build JSON pack-descriptions. Allows users to import graphics, set custom model IDs, and preview file hierarchies seamlessly.',
    tech: ['Web', 'Minecraft', 'JSON Builders', 'Tailwind CSS'],
    category: 'web',
    githubUrl: 'https://github.com/Talha/minecraft-resource-editor',
    demoUrl: 'https://talha.dev/pack-creator',
    stars: 104,
    featured: true
  }
];

export const SKILLS: Skill[] = [
  // Minecraft Category
  { name: 'Datapack Architecture', level: 95, category: 'Minecraft', iconName: 'Layers' },
  { name: 'Custom Commands & NBT', level: 92, category: 'Minecraft', iconName: 'Code2' },
  { name: 'Resource Pack Modeling', level: 88, category: 'Minecraft', iconName: 'Brush' },
  { name: 'Behavior & Loot Tables', level: 90, category: 'Minecraft', iconName: 'Database' },

  // Python Category
  { name: 'Python Core & Scripting', level: 94, category: 'Python', iconName: 'Terminal' },
  { name: 'Desktop App UI Dev', level: 85, category: 'Python', iconName: 'MonitorDot' },
  { name: 'Windows/OS Automation', level: 89, category: 'Python', iconName: 'Settings' },
  { name: 'Algorithmic Optimization', level: 87, category: 'Python', iconName: 'Cpu' },

  // AI Tools Category
  { name: 'Google Gemini SDK', level: 88, category: 'AI Tools', iconName: 'Sparkles' },
  { name: 'Prompt Refinement', level: 92, category: 'AI Tools', iconName: 'MessageSquareText' },
  { name: 'Fine-Tuning Datasets', level: 82, category: 'AI Tools', iconName: 'DatabaseBackup' },
  { name: 'Agentic Automations', level: 86, category: 'AI Tools', iconName: 'Workflow' },

  // Web + Other Category
  { name: 'React (Vite/TS)', level: 88, category: 'Web', iconName: 'Atom' },
  { name: 'Tailwind Styling', level: 91, category: 'Web', iconName: 'Palette' },
  { name: 'Discord Webhook Systems', level: 90, category: 'Other', iconName: 'MessageSquareMore' },
  { name: 'Software Architecture', level: 85, category: 'Other', iconName: 'Compass' }
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2024',
    title: 'Advanced Minecraft Datapack Development',
    description: 'Began building complex datapacks featuring custom biome generation override tables, fully functional RPG items with spell damage cooldowns, and immersive gameplay modes.',
    tags: ['Datapacks', 'Commands', 'Custom Entities'],
    iconType: 'minecraft'
  },
  {
    year: '2025',
    title: 'Python Scripting & AI API Integration',
    description: 'Expanded expertise into core desktop automations using Python. Pioneered lightweight agent setups leveraging LLM APIs to draft clean responsive data tables and code modules.',
    tags: ['Python', 'System API', 'Gemini SDK', 'Automation'],
    iconType: 'python'
  },
  {
    year: '2026',
    title: 'Full-Scale Optimization Systems & Portfolios',
    description: 'Currently working on game client performance, server optimization, cross-compilation widgets, and large-scale interactive modules to design clean visual assets.',
    tags: ['FPS Optimization', 'Voxel Engine Analytics', 'Premium Design'],
    iconType: 'ai'
  }
];

export const STATS: Stat[] = [
  { label: 'Saved Datapack Players', value: 3800, suffix: '+', iconName: 'Users' },
  { label: 'GitHub Commits (Python & MC)', value: 450, suffix: '+', iconName: 'GitCommit' },
  { label: 'Commands Executed/Sec', value: 20, suffix: 'k/s', iconName: 'Cpu' },
  { label: 'Completed Systems', value: 34, suffix: '', iconName: 'Award' }
];

export const SERVICES: Service[] = [
  {
    id: 'mc-dev',
    title: 'Minecraft Systems Development',
    description: 'Engineered high-performance Datapacks, clean Resource Packs, custom item spells, custom bosses, custom inventory GUIs, and interactive RPG progression grids.',
    iconName: 'Gamepad',
    features: ['Optimized Command Logic', 'JSON Pack Configurations', 'Interactive Server Lobbies', 'Custom Spell Hooks']
  },
  {
    id: 'py-apps',
    title: 'Automations & Python Applications',
    description: 'Tailored desktop assistants, system file synchronizers, background bots, file parser tools, and custom visual overlays using PyGame/Tkinter.',
    iconName: 'FileCode2',
    features: ['Lightweight Executables', 'Multi-Threaded Solvers', 'Rich Console Interfaces', 'OS Clipboard Utilities']
  },
  {
    id: 'ai-tools',
    title: 'AI Tooling & Integration',
    description: 'Deploying custom LLM integrations on workflows. Prompt structuring, dataset parsing utilities, custom agents, and real-time generation routines.',
    iconName: 'Sparkles',
    features: ['Gemini API Custom Bridges', 'Context-Recall Optimization', 'Structured Schema Parsing', 'Automated Agent Bots']
  },
  {
    id: 'consult',
    title: 'Systems Design Consultations',
    description: 'Optimizing existing systems. Providing feedback on commands/datapack tick-rate latency reduction and game/client optimization tricks.',
    iconName: 'Workflow',
    features: ['Tick-rate Overhead Analysis', 'Database/Config Audit', 'Refactoring Spaghetti Lines', 'UX Flow Design']
  }
];

export const SPLASH_TEXTS = [
  "Don't dig straight down!",
  "Optimization is key!",
  "Python is executable magic.",
  "AI assisted architecture.",
  "Powered by command blocks!",
  "Java Edition Fanatic.",
  "A pixel-perfect mindset.",
  "Slowing down is a lag spike."
];
