import { Project } from '@/models/Project.model';

export const projects: Project[] = [
  {
    title: 'Aldenaire Fashion Store',
    description:
      'Online fashion store with an admin dashboard that lets you manage products, track orders, and monitor sales performance.',
    tech: ['NextJS', 'Tailwindcss', 'ShadCN', 'Prisma'],
    link: 'https://e-commerce-website-sable-eight.vercel.app/',
    github: 'https://github.com/Jabame731/e-commerce-website',
    image: '/aldenaire.png',
  },
  {
    title: 'Hoobank Landing Page',
    description:
      'A modern and responsive landing page for Hoobank, showcasing clean UI design, reusable components, and responsive layouts.',
    tech: ['React', 'Tailwindcss'],
    link: 'https://react-bank-landing-page-liard.vercel.app/',
    github: 'https://github.com/Jabame731/react-bank-landing-page',
    image: '/hoobank.png',
  },
  {
    title: 'Uptape',
    description:
      'Helped the development and maintennance of Uptape , Comprehensive Lead Management Sytem for dealerships',
    tech: ['Angular', 'NGRX', 'Material UI', 'RxJS'],
    link: 'https://uptape.com/',
    image: '/uptape.png',
  },
  {
    title: 'Smart Parking System',
    description:
      'A capstone project that provides a smart solution for monitoring and managing parking spaces in real time',
    tech: ['React', 'Express.js', 'MySQL', 'Cypress'],
    github: 'https://github.com/Jabame731/capstone_project',
  },
];
