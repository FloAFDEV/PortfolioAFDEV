export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  thumbnail: string;
  screenshots: string[];
  technologies: string[];
  role: string;
  liveUrl?: string;
  status?: 'live' | 'wip';
  challenges?: { problem: string; solution: string }[];
}

export const projects: Project[] = [
  {
    slug: 'aurelia-desvaux',
    title: 'Aurélia Desvaux',
    shortDescription:
      'Site vitrine pour une thérapeute en Hypnose, PNL & EFT à Valbonne – Sophia-Antipolis.',
    detailedDescription: [
      "Conception et développement du site officiel d'Aurélia Desvaux, praticienne en thérapies brèves (Hypnose Ericksonienne, PNL, EFT) basée à Valbonne / Sophia-Antipolis.",
      "L'objectif était de créer une identité visuelle douce et professionnelle, de présenter les accompagnements proposés avec clarté, et d'intégrer un système de prise de rendez-vous directement accessible depuis le site.",
    ],
    thumbnail: '/projects/aurelia-desvaux-thumb.png',
    screenshots: [
      '/projects/aurelia-desvaux-thumb.png',
      '/projects/aurelia-desvaux-screen2.png',
    ],
    technologies: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'react-hook-form', 'Zod'],
    role: 'Développement full stack, intégration du design, déploiement Vercel',
    status: 'live',
    liveUrl: 'https://aurelia-desvaux.fr',
    challenges: [
      {
        problem: "Créer des animations d'entrée fluides et progressives sans impacter les performances.",
        solution: "Animations CSS keyframes légères déclenchées au scroll, respectant prefers-reduced-motion.",
      },
    ],
  },
  {
    slug: 'lylusio',
    title: 'Lylusio',
    shortDescription:
      "Site vitrine pour une astrologue & thérapeute énergétique (Reiki) à Toulouse.",
    detailedDescription: [
      "Développement du site de Lylusio, dédié à Emilie, astrologue consciente et praticienne Reiki à Toulouse. Le site présente son approche thérapeutique, ses accompagnements (astrologie, Reiki, thérapie holistique) et ses ressources.",
      "L'accent a été mis sur une navigation claire et une atmosphère visuelle en accord avec l'univers de la praticienne, tout en assurant un référencement naturel solide.",
    ],
    thumbnail: '/projects/lylusio-thumb.png',
    screenshots: [
      '/projects/lylusio-thumb.png',
      '/projects/lylusio-screen2.png',
    ],
    technologies: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'react-icons', 'react-hook-form', 'Zod'],
    role: 'Développement full stack, design, déploiement Vercel',
    status: 'live',
    liveUrl: 'https://lylusio.fr',
    challenges: [
      {
        problem: "Traduire visuellement un univers spirituel et apaisant en code.",
        solution: "Palette de couleurs douces, typographie soignée et animations subtiles pour une expérience immersive.",
      },
    ],
  },
  {
    slug: 'osteopraxis',
    title: 'OsteoPraxis',
    shortDescription:
      "Application SaaS pour ostéopathes : moins d'administratif, plus de patients.",
    detailedDescription: [
      "OsteoPraxis est une application web complète conçue pour les ostéopathes et praticiens en thérapie manuelle. Elle centralise la gestion des patients, des séances et des dossiers, sans nécessiter de stockage cloud externe.",
      "L'interface a été pensée pour être ultra-simple et rapide à prendre en main, avec une attention particulière à la confidentialité des données médicales.",
    ],
    thumbnail: '/projects/osteopraxis-thumb.png',
    screenshots: [
      '/projects/osteopraxis-thumb.png',
      '/projects/osteopraxis-screen2.png',
    ],
    technologies: ['Vite', 'React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'shadcn/ui', 'react-router-dom', 'jsPDF', 'Playwright'],
    role: 'Développement full stack, architecture base de données, déploiement',
    status: 'live',
    liveUrl: 'https://osteopraxis-app-main.vercel.app',
    challenges: [
      {
        problem: "Garantir la confidentialité des données médicales sans cloud obligatoire.",
        solution: "Row Level Security Supabase + chiffrement des données sensibles côté serveur.",
      },
    ],
  },
  {
    slug: 'garage-mendonca',
    title: 'Garage Mendonça',
    shortDescription:
      "Site vitrine pour un garage automobile expert japonaises & boîte automatique à Drémil-Lafage. (En cours)",
    detailedDescription: [
      "Conception et développement du site du Garage Mendonça, spécialiste des véhicules japonais et de la boîte automatique depuis 2001 à Drémil-Lafage (Haute-Garonne).",
      "Le site met en avant les services proposés, les statistiques clés (30+ ans d'expérience, 2 000+ réparations, 98% clients satisfaits) et intègre un formulaire de demande de devis gratuit. Projet en cours de développement.",
    ],
    thumbnail: '/projects/garage-mendonca-thumb.png',
    screenshots: [
      '/projects/garage-mendonca-thumb.png',
      '/projects/garage-mendonca-screen2.png',
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'dnd-kit', 'lucide-react'],
    role: 'Développement, SEO local, intégration formulaire de contact',
    status: 'wip',
    liveUrl: 'https://garagemendonca.vercel.app',
    challenges: [
      {
        problem: "Maximiser le score Lighthouse pour améliorer le référencement local.",
        solution: "Optimisation des images, lazy loading, et rendu statique pour un score performance > 95.",
      },
    ],
  },
];
